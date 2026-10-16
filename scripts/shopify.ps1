$profileDir = Join-Path $env:USERPROFILE '.shopify-cli-pessoal'
$originalAppData = $env:APPDATA
$originalLocalAppData = $env:LOCALAPPDATA

$env:APPDATA = Join-Path $profileDir 'Roaming'
$env:LOCALAPPDATA = Join-Path $profileDir 'Local'
New-Item -ItemType Directory -Force -Path $env:APPDATA, $env:LOCALAPPDATA | Out-Null

try {
    & shopify @args
}
finally {
    $env:APPDATA = $originalAppData
    $env:LOCALAPPDATA = $originalLocalAppData
}
