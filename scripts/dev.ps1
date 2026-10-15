param(
    [Parameter(Mandatory = $true)][string]$Loja,
    [switch]$Subir
)

$ErrorActionPreference = 'Stop'
if ($Loja -notmatch '\.myshopify\.com$') { $Loja = "$Loja.myshopify.com" }
Set-Location (Split-Path $PSScriptRoot -Parent)

function Ler-Segredo([string]$Pergunta) {
    $seguro = Read-Host $Pergunta -AsSecureString
    $ponteiro = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($seguro)
    try { [Runtime.InteropServices.Marshal]::PtrToStringBSTR($ponteiro) }
    finally { [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($ponteiro) }
}

$env:SHOPIFY_CLI_THEME_TOKEN = Ler-Segredo 'Senha do app Theme Access (shptka_...)'
try {
    if ($Subir) {
        $nome = 'Rabisco (portfolio)'
        $temas = @(shopify theme list --store $Loja --name $nome --json | ConvertFrom-Json)
        if ($temas.Count -gt 0 -and $temas[0].id) {
            shopify theme push --store $Loja --theme $temas[0].id
        }
        else {
            shopify theme push --store $Loja --unpublished --theme $nome
        }
        shopify theme list --store $Loja
    }
    else {
        $env:SHOPIFY_FLAG_STORE_PASSWORD = Ler-Segredo 'Senha da loja (Loja virtual > Preferencias)'
        shopify theme dev --store $Loja --live-reload off
    }
}
finally {
    Remove-Item Env:SHOPIFY_CLI_THEME_TOKEN -ErrorAction SilentlyContinue
    Remove-Item Env:SHOPIFY_FLAG_STORE_PASSWORD -ErrorAction SilentlyContinue
}
