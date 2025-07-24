#!/bin/bash

# Portfolio Deployment Script
# Usage: ./scripts/deploy.sh [environment]

set -e

ENVIRONMENT=${1:-production}
PROJECT_NAME="portfolio"
BUILD_DIR="build"

echo "🚀 Starting deployment for $PROJECT_NAME in $ENVIRONMENT mode..."

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "❌ PM2 is not installed. Installing PM2..."
    npm install -g pm2
fi

# Create logs directory if it doesn't exist
if [ ! -d "logs" ]; then
    echo "📁 Creating logs directory..."
    mkdir -p logs
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Build the application
echo "🔨 Building application..."
npm run build

# Stop existing PM2 process if running
echo "🛑 Stopping existing PM2 processes..."
pm2 stop $PROJECT_NAME 2>/dev/null || echo "No existing process found"

# Delete existing PM2 process
pm2 delete $PROJECT_NAME 2>/dev/null || echo "No existing process to delete"

# Start the application with PM2
echo "▶️ Starting application with PM2..."
if [ "$ENVIRONMENT" = "production" ]; then
    pm2 start ecosystem.config.js --env production
else
    pm2 start ecosystem.config.js
fi

# Save PM2 configuration
echo "💾 Saving PM2 configuration..."
pm2 save

# Setup PM2 startup (run once on server)
echo "🔧 Setting up PM2 startup script..."
pm2 startup

# Show PM2 status
echo "📊 Current PM2 status:"
pm2 status

echo "✅ Deployment completed successfully!"
echo "🌐 Application is running on http://localhost:3000"
echo "📊 Monitor with: pm2 monit"
echo "📋 View logs with: pm2 logs $PROJECT_NAME"
