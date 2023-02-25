terraform fmt --recursive
terraform validate
tflint --recursive
tfsec
terraform-docs markdown . --output-file ./terraform.md