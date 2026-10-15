$perfil = Join-Path $env:USERPROFILE '.shopify-cli-pessoal'
$appdataOriginal = $env:APPDATA
$localOriginal = $env:LOCALAPPDATA

$env:APPDATA = Join-Path $perfil 'Roaming'
$env:LOCALAPPDATA = Join-Path $perfil 'Local'
New-Item -ItemType Directory -Force -Path $env:APPDATA, $env:LOCALAPPDATA | Out-Null

try {
    & shopify @args
}
finally {
    $env:APPDATA = $appdataOriginal
    $env:LOCALAPPDATA = $localOriginal
}
