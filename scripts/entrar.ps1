param([string]$Loja = 'rabisco-demo.myshopify.com')

$cli = Join-Path $PSScriptRoot 'shopify.ps1'
$escopos = 'write_products,write_files,write_publications,write_online_store_navigation,read_locales'
Set-Location (Split-Path $PSScriptRoot -Parent)

Write-Host "`n1/3 Login da conta pessoal no Shopify CLI (sessao separada da empresa)" -ForegroundColor Cyan
& $cli theme list --store $Loja

Write-Host "`n2/3 Autorizar o CLI a criar os produtos ficticios na $Loja" -ForegroundColor Cyan
& $cli store auth --store $Loja --scopes $escopos

Write-Host "`n3/3 Tema de desenvolvimento em http://127.0.0.1:9292 (deixe esta aba aberta)" -ForegroundColor Cyan
& $cli theme dev --store $Loja --live-reload off
