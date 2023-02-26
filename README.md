# monorepo-web-application

こちらのリポジトリは単一リポジトリでシンプルなチケット管理システムを構築したものです。  
使用した技術と設計に関する解説は下記にて行っています。  
  
[Web開発を単一リポジトリで設計する #モノレポ #モジュラーモノリス Express.js/React/Vue | Zenn](https://zenn.dev/articles/4718245cb66b47/edit)

## 🔰 はじめかた

### システム要件

```json
  // packages.json
  "engines": {
    "npm": "forbidden, use pnpm",
    "pnpm": ">=7",
    "yarn": "forbidden, use pnpm",
    "node": "18.13.0"
  },
```

ワークスペース配下のモジュールを復元

```bash
$ pnpm install
```

development 環境で実行

```bash
$ pnpm dev
```

## 🔨 Build

### ワークスペースをビルド

packages 配下の ts がトランスパイルされ `./dist` に出力します。

```bash
$ pnpm build
```

### ワークスペースをクリーン

turbo によるキャッシュとワークスペース配下の node_modules の削除を行います。

```bash
$ pnpm clean
```

### packages/app をビルド

ワークスペースビルド後、`./dist` から packages/app に不要なパッケージを排除し`./bin/app` に出力する。

```bash
$ pnpm build_app
```

## 🚀 Deploy

### On Initialize

以下の内容は terraform では行いません。それぞれが設定する必要があります。

- プロジェクトの作成
- 請求アカウントの紐付け
- API の許可（Artifact Registry, Cloud Run）
- サービスアカウントの作成
- サービスアカウントへの IAM ロール設定

認証情報は環境変数を使用します。

```bash
$ export GOOGLE_APPLICATION_CREDENTIALS="/path/to/your/keyfile.json"
```

初めて実行する人は以下の手順で行います。

```bash
$ terraform -chdir=./terraform/gcp init
$ terraform -chdir=./terraform/gcp apply -var="project_id=[your project id]"
```

作成されるクラウドリソースは[こちら](./terraform/gcp/terraform.md)

### On Update

main ブランチへ Push すると GitHub Actions によりコンテナイメージをビルドし、Cloud Run へ反映します。

## 🚫 Delete

```bash
$ terraform -chdir=./terraform/gcp destroy -var="project_id=[your project id]"
```
