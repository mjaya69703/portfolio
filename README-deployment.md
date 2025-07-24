# Portfolio Deployment dengan PM2

Panduan lengkap untuk deploy portfolio Next.js menggunakan PM2.

## Prerequisites

1. **Node.js** (versi 18 atau lebih baru)
2. **PM2** (Process Manager)
3. **Git** (untuk deployment otomatis)

## Instalasi PM2

```bash
# Install PM2 secara global
npm install -g pm2

# Atau dengan yarn
yarn global add pm2
```

## Quick Start

### 1. Build dan Deploy

```bash
# Method 1: Menggunakan npm script
npm run deploy

# Method 2: Menggunakan script deployment
# Linux/Mac
chmod +x scripts/deploy.sh
./scripts/deploy.sh

# Windows
scripts\deploy.bat
```

### 2. Management Commands

```bash
# Start aplikasi
npm run pm2:start

# Stop aplikasi  
npm run pm2:stop

# Restart aplikasi
npm run pm2:restart

# Graceful reload (zero downtime)
npm run pm2:reload

# Lihat status
npm run pm2:status

# Lihat logs
npm run pm2:logs

# Monitor dashboard
npm run pm2:monit

# Delete dari PM2
npm run pm2:delete
```

## Management Script

Script `manage.sh` menyediakan perintah lengkap:

```bash
# Buat executable
chmod +x scripts/manage.sh

# Usage
./scripts/manage.sh start      # Start aplikasi
./scripts/manage.sh stop       # Stop aplikasi  
./scripts/manage.sh restart    # Restart aplikasi
./scripts/manage.sh reload     # Graceful reload
./scripts/manage.sh status     # Lihat status
./scripts/manage.sh logs       # Lihat logs
./scripts/manage.sh monitor    # Buka monitor dashboard
./scripts/manage.sh update     # Pull code & reload
```

## Konfigurasi PM2

File `ecosystem.config.js` berisi konfigurasi PM2:

```javascript
{
  name: 'portfolio',           // Nama aplikasi
  script: 'npm',              // Command yang dijalankan
  args: 'start',              // Arguments
  instances: 'max',           // Cluster mode (gunakan semua CPU)
  exec_mode: 'cluster',       // Cluster mode untuk load balancing
  env: {
    NODE_ENV: 'development',
    PORT: 3000
  },
  env_production: {
    NODE_ENV: 'production',
    PORT: 3000
  }
}
```

## Environment

### Development
```bash
pm2 start ecosystem.config.js
```

### Production
```bash
pm2 start ecosystem.config.js --env production
```

## Monitoring

### 1. Dashboard Monitor
```bash
pm2 monit
```

### 2. Logs
```bash
pm2 logs portfolio           # Real-time logs
pm2 logs portfolio --lines 50  # Last 50 lines
```

### 3. Status
```bash
pm2 status                   # Lihat semua proses
pm2 show portfolio           # Detail aplikasi
```

## Auto Startup

Setup PM2 untuk auto-start saat sistem boot:

```bash
# Generate startup script
pm2 startup

# Save current processes
pm2 save

# Restore saved processes
pm2 resurrect
```

## Deployment Otomatis

### Setup Repository
```bash
# Clone repository
git clone https://github.com/mjaya69703/portfolio.git
cd portfolio

# Install dependencies
npm install

# Deploy
npm run deploy:prod
```

### Update dan Deploy
```bash
# Pull latest changes dan reload
./scripts/manage.sh update
```

## Troubleshooting

### 1. Port sudah digunakan
```bash
# Cek proses yang menggunakan port 3000
lsof -i :3000  # Linux/Mac
netstat -ano | findstr :3000  # Windows

# Kill proses
kill -9 <PID>  # Linux/Mac
taskkill /PID <PID> /F  # Windows
```

### 2. PM2 tidak bisa start
```bash
# Reset PM2
pm2 kill
pm2 start ecosystem.config.js
```

### 3. Memory issues
```bash
# Reload untuk free memory
pm2 reload portfolio

# Restart jika perlu
pm2 restart portfolio
```

### 4. Logs tidak muncul
```bash
# Flush logs
pm2 flush

# Restart logging
pm2 restart portfolio
```

## File Structure

```
portfolio/
├── ecosystem.config.js     # PM2 configuration
├── scripts/
│   ├── deploy.sh          # Linux/Mac deployment
│   ├── deploy.bat         # Windows deployment  
│   └── manage.sh          # Management script
├── logs/                  # PM2 logs
│   ├── combined.log
│   ├── error.log
│   └── out.log
└── README-deployment.md   # This file
```

## Best Practices

1. **Always build before deploy**
   ```bash
   npm run build
   ```

2. **Use graceful reload for updates**
   ```bash
   pm2 reload portfolio
   ```

3. **Monitor memory usage**
   ```bash
   pm2 monit
   ```

4. **Save configuration**
   ```bash
   pm2 save
   ```

5. **Regular log cleanup**
   ```bash
   pm2 flush
   ```

## Security

1. **Setup firewall rules**
2. **Use reverse proxy (Nginx)**
3. **Enable HTTPS**
4. **Regular updates**

## Performance

1. **Cluster mode** - Gunakan semua CPU cores
2. **Memory limits** - Set max_memory_restart
3. **Load balancing** - PM2 cluster mode
4. **Caching** - Next.js built-in caching

## Support

Jika ada masalah:
1. Cek logs: `pm2 logs portfolio`
2. Cek status: `pm2 status`
3. Restart: `pm2 restart portfolio`
4. Monitor: `pm2 monit`
