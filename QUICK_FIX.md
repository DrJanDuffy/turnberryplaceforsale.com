# Quick Fix: Install Drupal Dependencies

## The Problem
You're seeing this error:
```
Failed to open stream: No such file or directory in ...vendor/autoload.php
```

This means Composer dependencies haven't been installed yet.

## Solution

### If you have PHP in PATH:
```powershell
cd C:\Users\geneb\AppData\Roaming\drupal
composer install
```

### If PHP is NOT in PATH (most common):

#### Option 1: Use the Install Script
```powershell
cd C:\Users\geneb\turnberryplaceforsale.com
.\install-drupal-deps.ps1
```

The script will:
- Auto-detect PHP (XAMPP, Laragon, standalone)
- Download Composer if needed
- Install all Drupal dependencies

#### Option 2: Manual Installation

**Step 1: Find your PHP location**

If you're using:
- **XAMPP**: PHP is at `C:\xampp\php\php.exe`
- **Laragon**: PHP is at `C:\laragon\bin\php\php8.x.x\php.exe`
- **WAMP**: PHP is at `C:\wamp64\bin\php\php8.x.x\php.exe`
- **Standalone**: Usually at `C:\php\php.exe`

**Step 2: Download Composer**
```powershell
cd C:\Users\geneb\AppData\Roaming\drupal
# Replace C:\xampp\php\php.exe with your PHP path
C:\xampp\php\php.exe -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
C:\xampp\php\php.exe composer-setup.php
```

**Step 3: Install Dependencies**
```powershell
cd C:\Users\geneb\AppData\Roaming\drupal
C:\xampp\php\php.exe composer.phar install
```

#### Option 3: Add PHP to PATH (Recommended for future)

1. Find your PHP installation (see Option 2, Step 1)
2. Add PHP directory to System PATH:
   - Press `Win + R`, type `sysdm.cpl`, press Enter
   - Go to "Advanced" tab → "Environment Variables"
   - Under "System Variables", find "Path" → Edit
   - Add your PHP directory (e.g., `C:\xampp\php`)
   - Click OK on all dialogs
   - Restart PowerShell/Command Prompt

3. Then run:
```powershell
cd C:\Users\geneb\AppData\Roaming\drupal
composer install
```

## Verify Installation

After installation, check:
```powershell
Test-Path C:\Users\geneb\AppData\Roaming\drupal\vendor\autoload.php
```

Should return `True`.

## Next Steps

Once dependencies are installed:
1. Run Drupal: `.\run-drupal.ps1`
2. Or access via your web server (XAMPP/Laragon)
3. Complete Drupal installation wizard
4. Enable JSON:API module
5. Configure Next.js to connect to Drupal
