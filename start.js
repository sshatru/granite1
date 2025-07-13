#!/usr/bin/env node

/**
 * Simple startup script for ISKCON Granite website
 * This script works with older Node.js versions
 */

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting ISKCON Granite Website...\n');

// Check if tsx is available
function runServer() {
  // Try different methods to start the server
  const methods = [
    { cmd: 'npx', args: ['tsx', 'server/index.ts'], name: 'Using tsx' },
    { cmd: 'node', args: ['--experimental-modules', '--es-module-specifier-resolution=node', 'server/index.ts'], name: 'Using experimental modules' },
  ];

  function tryMethod(index) {
    if (index >= methods.length) {
      console.error('❌ Failed to start server with all methods.');
      console.error('Please make sure you have Node.js 18+ installed.');
      console.error('Download from: https://nodejs.org/');
      process.exit(1);
    }

    const method = methods[index];
    console.log(`📡 ${method.name}...`);
    
    const child = spawn(method.cmd, method.args, {
      stdio: 'inherit',
      env: { ...process.env, NODE_ENV: 'development' }
    });

    child.on('error', (error) => {
      console.log(`❌ ${method.name} failed: ${error.message}`);
      console.log('🔄 Trying next method...\n');
      tryMethod(index + 1);
    });

    child.on('exit', (code) => {
      if (code !== 0) {
        console.log(`❌ ${method.name} exited with code ${code}`);
        console.log('🔄 Trying next method...\n');
        tryMethod(index + 1);
      }
    });
  }

  tryMethod(0);
}

// Check if dependencies are installed
if (!fs.existsSync(path.join(__dirname, 'node_modules'))) {
  console.log('📦 Installing dependencies...');
  const install = spawn('npm', ['install'], { stdio: 'inherit' });
  
  install.on('close', (code) => {
    if (code === 0) {
      console.log('✅ Dependencies installed successfully!\n');
      runServer();
    } else {
      console.error('❌ Failed to install dependencies');
      process.exit(1);
    }
  });
} else {
  runServer();
}