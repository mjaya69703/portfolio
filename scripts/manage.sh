#!/bin/bash

# Portfolio Management Script
# Usage: ./scripts/manage.sh [command]

PROJECT_NAME="portfolio"

case "$1" in
    start)
        echo "▶️ Starting $PROJECT_NAME..."
        pm2 start ecosystem.config.js
        ;;
    stop)
        echo "🛑 Stopping $PROJECT_NAME..."
        pm2 stop $PROJECT_NAME
        ;;
    restart)
        echo "🔄 Restarting $PROJECT_NAME..."
        pm2 restart $PROJECT_NAME
        ;;
    reload)
        echo "🔃 Reloading $PROJECT_NAME..."
        pm2 reload $PROJECT_NAME
        ;;
    status)
        echo "📊 Status for $PROJECT_NAME:"
        pm2 status
        ;;
    logs)
        echo "📋 Showing logs for $PROJECT_NAME:"
        pm2 logs $PROJECT_NAME
        ;;
    monitor)
        echo "📊 Opening PM2 monitor..."
        pm2 monit
        ;;
    delete)
        echo "🗑️ Deleting $PROJECT_NAME..."
        pm2 delete $PROJECT_NAME
        ;;
    list)
        echo "📋 All PM2 processes:"
        pm2 list
        ;;
    save)
        echo "💾 Saving PM2 configuration..."
        pm2 save
        ;;
    resurrect)
        echo "👻 Resurrecting saved PM2 processes..."
        pm2 resurrect
        ;;
    update)
        echo "🔄 Updating and restarting..."
        git pull origin main
        npm install
        npm run build
        pm2 reload $PROJECT_NAME
        ;;
    *)
        echo "🔧 Portfolio Management Script"
        echo ""
        echo "Usage: $0 {start|stop|restart|reload|status|logs|monitor|delete|list|save|resurrect|update}"
        echo ""
        echo "Commands:"
        echo "  start      - Start the application"
        echo "  stop       - Stop the application"
        echo "  restart    - Restart the application"
        echo "  reload     - Graceful reload (zero downtime)"
        echo "  status     - Show application status"
        echo "  logs       - Show application logs"
        echo "  monitor    - Open PM2 monitor dashboard"
        echo "  delete     - Delete the application from PM2"
        echo "  list       - List all PM2 processes"
        echo "  save       - Save current PM2 configuration"
        echo "  resurrect  - Restore saved PM2 processes"
        echo "  update     - Pull latest code and reload"
        exit 1
        ;;
esac
