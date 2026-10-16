param([string]$Store = 'inkly-demo.myshopify.com')

$cli = Join-Path $PSScriptRoot 'shopify.ps1'
$scopes = 'write_products,write_files,write_publications,write_online_store_navigation,read_locales'
$urlFile = Join-Path $env:USERPROFILE '.shopify-cli-pessoal\authorize-url.txt'

Remove-Item $urlFile -ErrorAction SilentlyContinue
$env:SHOPIFY_CAPTURED_URL = $urlFile
$env:NODE_OPTIONS = '--require "' + ((Join-Path $PSScriptRoot 'capture-url.cjs') -replace '\\', '/') + '"'

try {
    Write-Host "`nThe authorization page opens in the Claude app browser (personal account), not in Chrome." -ForegroundColor Cyan
    & $cli store auth --store $Store --scopes $scopes
}
finally {
    Remove-Item Env:SHOPIFY_CAPTURED_URL, Env:NODE_OPTIONS -ErrorAction SilentlyContinue
    Remove-Item $urlFile -ErrorAction SilentlyContinue
}
