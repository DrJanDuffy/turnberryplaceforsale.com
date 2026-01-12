# Drupal Development Server Startup Script
# This script starts Drupal using PHP's built-in development server

$drupalPath = "C:\Users\geneb\AppData\Roaming\drupal"
$webPath = "$drupalPath\web"
$host = "localhost"
$port = "8888"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Drupal Development Server" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Drupal directory exists
if (-not (Test-Path $drupalPath)) {
    Write-Host "ERROR: Drupal directory not found at: $drupalPath" -ForegroundColor Red
    Write-Host "Please update the `$drupalPath variable in this script." -ForegroundColor Yellow
    exit 1
}

# Check if web directory exists
if (-not (Test-Path $webPath)) {
    Write-Host "ERROR: Drupal web directory not found at: $webPath" -ForegroundColor Red
    exit 1
}

# Check if vendor/autoload.php exists
if (-not (Test-Path "$drupalPath\vendor\autoload.php")) {
    Write-Host "WARNING: Composer dependencies not installed!" -ForegroundColor Yellow
    Write-Host "Run 'composer install' in $drupalPath first." -ForegroundColor Yellow
    Write-Host ""
    $continue = Read-Host "Continue anyway? (y/n)"
    if ($continue -ne "y" -and $continue -ne "Y") {
        exit 1
    }
}

# Try to find PHP
$phpPaths = @(
    "php",
    "C:\php\php.exe",
    "C:\xampp\php\php.exe",
    "C:\wamp\bin\php\php*\php.exe",
    "C:\Program Files\PHP\php.exe",
    "C:\laragon\bin\php\php*\php.exe"
)

$phpExe = $null
foreach ($path in $phpPaths) {
    if ($path -eq "php") {
        try {
            $null = Get-Command php -ErrorAction Stop
            $phpExe = "php"
            break
        } catch {
            continue
        }
    } else {
        $resolved = Resolve-Path $path -ErrorAction SilentlyContinue
        if ($resolved) {
            $phpExe = $resolved[0].Path
            break
        }
    }
}

if (-not $phpExe) {
    Write-Host "ERROR: PHP not found!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install PHP 8.1 or higher:" -ForegroundColor Yellow
    Write-Host "  1. Download from: https://windows.php.net/download/" -ForegroundColor Yellow
    Write-Host "  2. Extract to C:\php (or another location)" -ForegroundColor Yellow
    Write-Host "  3. Add PHP to your system PATH" -ForegroundColor Yellow
    Write-Host "  4. Or update this script with your PHP path" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Alternatively, you can:" -ForegroundColor Yellow
    Write-Host "  - Install XAMPP: https://www.apachefriends.org/" -ForegroundColor Yellow
    Write-Host "  - Install Laragon: https://laragon.org/" -ForegroundColor Yellow
    Write-Host "  - Use Docker: docker-compose up" -ForegroundColor Yellow
    exit 1
}

Write-Host "Found PHP at: $phpExe" -ForegroundColor Green
Write-Host ""

# Check PHP version
$phpVersion = & $phpExe -v 2>&1 | Select-Object -First 1
Write-Host "PHP Version: $phpVersion" -ForegroundColor Cyan
Write-Host ""

# Start the server
Write-Host "Starting Drupal development server..." -ForegroundColor Cyan
Write-Host "Server URL: http://$host`:$port" -ForegroundColor Green
Write-Host "Document Root: $webPath" -ForegroundColor Gray
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

# Change to web directory and start PHP server
Set-Location $webPath
& $phpExe -S "$host`:$port" -t . index.php
