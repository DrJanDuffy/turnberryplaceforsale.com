# Install Drupal Composer Dependencies Script
# This script downloads and uses Composer to install Drupal dependencies

$drupalPath = "C:\Users\geneb\AppData\Roaming\drupal"
$composerPhar = "$drupalPath\composer.phar"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Installing Drupal Dependencies" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Drupal directory exists
if (-not (Test-Path $drupalPath)) {
    Write-Host "ERROR: Drupal directory not found at: $drupalPath" -ForegroundColor Red
    exit 1
}

Set-Location $drupalPath

# Try to find PHP
$phpPaths = @(
    "php",
    "C:\php\php.exe",
    "C:\xampp\php\php.exe",
    "C:\wamp64\bin\php\php*\php.exe",
    "C:\wamp\bin\php\php*\php.exe",
    "C:\Program Files\PHP\php.exe",
    "C:\Program Files (x86)\PHP\php.exe",
    "C:\laragon\bin\php\php*\php.exe",
    "C:\laragon\bin\php\php.exe"
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
        $resolved = Get-ChildItem $path -ErrorAction SilentlyContinue | Select-Object -First 1
        if ($resolved) {
            $phpExe = $resolved.FullName
            break
        }
    }
}

if (-not $phpExe) {
    Write-Host "ERROR: PHP not found!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please install PHP 8.1 or higher:" -ForegroundColor Yellow
    Write-Host "  1. Download from: https://windows.php.net/download/" -ForegroundColor Yellow
    Write-Host "  2. Extract to C:\php" -ForegroundColor Yellow
    Write-Host "  3. Add C:\php to your system PATH" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Or install XAMPP/Laragon which includes PHP." -ForegroundColor Yellow
    exit 1
}

Write-Host "Found PHP at: $phpExe" -ForegroundColor Green
Write-Host ""

# Check if composer.phar exists
if (-not (Test-Path $composerPhar)) {
    Write-Host "Downloading Composer..." -ForegroundColor Cyan
    try {
        # Download Composer installer
        $installerUrl = "https://getcomposer.org/installer"
        $installerPath = "$drupalPath\composer-setup.php"
        
        Invoke-WebRequest -Uri $installerUrl -OutFile $installerPath -UseBasicParsing
        
        Write-Host "Installing Composer..." -ForegroundColor Cyan
        & $phpExe $installerPath
        
        # Clean up installer
        Remove-Item $installerPath -ErrorAction SilentlyContinue
        
        if (-not (Test-Path $composerPhar)) {
            Write-Host "ERROR: Failed to install Composer" -ForegroundColor Red
            exit 1
        }
        
        Write-Host "Composer installed successfully!" -ForegroundColor Green
        Write-Host ""
    } catch {
        Write-Host "ERROR: Failed to download/install Composer: $_" -ForegroundColor Red
        Write-Host ""
        Write-Host "Manual installation:" -ForegroundColor Yellow
        Write-Host "  1. Visit: https://getcomposer.org/download/" -ForegroundColor Yellow
        Write-Host "  2. Download composer.phar" -ForegroundColor Yellow
        Write-Host "  3. Place it in: $drupalPath" -ForegroundColor Yellow
        exit 1
    }
} else {
    Write-Host "Composer.phar found" -ForegroundColor Green
    Write-Host ""
}

# Install dependencies
Write-Host "Installing Drupal dependencies (this may take several minutes)..." -ForegroundColor Cyan
Write-Host ""

try {
    & $phpExe $composerPhar install --no-interaction --no-progress
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "SUCCESS: Dependencies installed!" -ForegroundColor Green
        Write-Host ""
        Write-Host "You can now run Drupal using:" -ForegroundColor Cyan
        Write-Host "  cd C:\Users\geneb\turnberryplaceforsale.com" -ForegroundColor Yellow
        Write-Host "  .\run-drupal.ps1" -ForegroundColor Yellow
    } else {
        Write-Host ""
        Write-Host "ERROR: Installation failed with exit code $LASTEXITCODE" -ForegroundColor Red
        exit 1
    }
} catch {
    Write-Host ""
    Write-Host "ERROR: Failed to install dependencies: $_" -ForegroundColor Red
    exit 1
}
