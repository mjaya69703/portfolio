@echo off
:: Portfolio Deployment Script for Windows
:: Simple production deployment with PM2

setlocal

set PROJECT_NAME=portfolio

echo 🚀 Starting deployment for %PROJECT_NAME%...

:: Check if PM2 is installed
pm2 --version >nul 2>&1
if errorlevel 1 (
    echo ❌ PM2 is not installed. Installing PM2...
    npm install -g pm2
)

:: Create logs directory if it doesn't exist
if not exist "logs" (
    echo 📁 Creating logs directory...
    mkdir logs
)

:: Install dependencies
echo 📦 Installing dependencies...
npm ci

:: Build the application
echo 🔨 Building application...
npm run build

:: Stop existing PM2 process if running
echo 🛑 Stopping existing PM2 processes...
pm2 stop %PROJECT_NAME% 2>nul || echo No existing process found

:: Delete existing PM2 process
pm2 delete %PROJECT_NAME% 2>nul || echo No existing process to delete

:: Start the application with PM2
echo ▶️ Starting application with PM2...
pm2 start ecosystem.config.js

:: Save PM2 configuration
echo 💾 Saving PM2 configuration...
pm2 save

:: Show PM2 status
echo 📊 Current PM2 status:
pm2 status

echo ✅ Deployment completed successfully!
echo 🌐 Application is running on http://localhost:3000
echo 📋 View logs with: pm2 logs %PROJECT_NAME%

pause
