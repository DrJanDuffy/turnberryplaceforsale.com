# Drupal Backend Setup Guide

## Issue: Missing Composer Dependencies

The error you're seeing indicates that Drupal's Composer dependencies haven't been installed.

## Solution: Install Composer Dependencies

### Option 1: Install Composer (Recommended)

1. **Download Composer:**
   - Visit: https://getcomposer.org/download/
   - Download `Composer-Setup.exe` for Windows
   - Run the installer and follow the prompts

2. **Install Dependencies:**
   ```bash
   cd C:\Users\geneb\AppData\Roaming\drupal
   composer install
   ```

### Option 2: Use Composer PHAR (No Installation Required)

1. **Download composer.phar:**
   ```powershell
   cd C:\Users\geneb\AppData\Roaming\drupal
   php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
   php composer-setup.php
   php -r "unlink('composer-setup.php');"
   ```

2. **Install Dependencies:**
   ```powershell
   php composer.phar install
   ```

### Option 3: Manual Download (If PHP/Composer unavailable)

If you can't install Composer, you may need to:
1. Use a different machine/server with Composer installed
2. Use Docker with a pre-configured Drupal environment
3. Use a cloud-based Drupal hosting service

## Verify Installation

After running `composer install`, verify that the vendor folder has content:

```powershell
cd C:\Users\geneb\AppData\Roaming\drupal
Test-Path vendor\autoload.php
```

This should return `True` if the installation was successful.

## Next Steps

Once Composer dependencies are installed:

1. **Configure Drupal:**
   - Copy `web/sites/default/default.settings.php` to `web/sites/default/settings.php`
   - Create `web/sites/default/files` directory
   - Set up your database connection in `settings.php`

2. **Install Drupal:**
   - Visit your Drupal site in a browser
   - Follow the installation wizard

3. **Enable JSON:API:**
   - Go to Extend → Enable "JSON:API" module
   - This is required for the Next.js frontend to connect

4. **Configure Next.js:**
   - Set `NEXT_PUBLIC_DRUPAL_BASE_URL` in your Next.js `.env.local` or Vercel settings
   - Point it to your Drupal installation URL

## Troubleshooting

- **PHP not found:** Install PHP 8.1+ from https://windows.php.net/download/
- **Composer not found:** Add Composer to your system PATH or use Option 2 above
- **Memory limit errors:** Increase PHP memory limit in `php.ini`: `memory_limit = 512M`
