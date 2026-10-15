param([string]$Loja = 'rabisco-demo.myshopify.com')

$cli = Join-Path $PSScriptRoot 'shopify.ps1'
$escopos = 'write_products,write_files,write_publications,write_online_store_navigation,read_locales'
$arquivoUrl = Join-Path $env:USERPROFILE '.shopify-cli-pessoal\url-autorizacao.txt'

Remove-Item $arquivoUrl -ErrorAction SilentlyContinue
$env:SHOPIFY_URL_CAPTURADA = $arquivoUrl
$env:NODE_OPTIONS = '--require "' + ((Join-Path $PSScriptRoot 'capturar-url.cjs') -replace '\\', '/') + '"'

try {
    Write-Host "`nA pagina de autorizacao abre no navegador do app Claude (conta pessoal), nao no Chrome." -ForegroundColor Cyan
    & $cli store auth --store $Loja --scopes $escopos
}
finally {
    Remove-Item Env:SHOPIFY_URL_CAPTURADA, Env:NODE_OPTIONS -ErrorAction SilentlyContinue
    Remove-Item $arquivoUrl -ErrorAction SilentlyContinue
}
