# Terraformの設定
terraform {
  required_version = ">=1.3.7"
  required_providers {
    google = ">=4.51.0"
  }
}

# GCPプロジェクトIDを指定するための変数
variable "project_id" {
  type        = string
  description = "The ID of the GCP project that will be created or used by the resources."
}

# デプロイ先のリージョンを指定するための変数
variable "region" {
  type        = string
  default     = "asia-northeast1"
  description = "The region to deploy the resources."
}

# 各リソースで使うローカル変数を定義する
locals {
  project_id = var.project_id
  region     = var.region
  labels = {
    project     = local.project_id
    environment = "production"
    terraform   = true
  }
}

# GCPプロバイダの設定
provider "google" {
  project = local.project_id
  region  = local.region
}


# Artifact Registryのリポジトリを作成するためのリソース
resource "google_artifact_registry_repository" "repos" {
  repository_id = "simple-ticket-system"
  format        = "DOCKER"
  location      = local.region
  labels        = local.labels

  provisioner "local-exec" {
    working_dir = "../../"
    command     = <<EOT
    docker build -t ${local.region}-docker.pkg.dev/${local.project_id}/${google_artifact_registry_repository.repos.repository_id}/app:latest .
    docker push ${local.region}-docker.pkg.dev/${local.project_id}/${google_artifact_registry_repository.repos.repository_id}/app:latest
    EOT
  }
}

# Cloud Runのサービスを作成するためのリソース
resource "google_cloud_run_service" "run" {
  name     = "simple-ticket-system-app"
  location = local.region

  metadata {
    labels = local.labels
  }

  template {
    spec {
      containers {
        image = "${local.region}-docker.pkg.dev/${local.project_id}/${google_artifact_registry_repository.repos.repository_id}/app:latest"
      }
    }
  }
}

# Cloud RunのIAMポリシーを設定するためのデータを取得
data "google_iam_policy" "noauth" {
  binding {
    role    = "roles/run.invoker"
    members = ["allUsers"]
  }
}

# Cloud RunのIAMポリシーを設定
resource "google_cloud_run_service_iam_policy" "noauth" {
  location = google_cloud_run_service.run.location
  project  = google_cloud_run_service.run.project
  service  = google_cloud_run_service.run.name

  policy_data = data.google_iam_policy.noauth.policy_data
}
