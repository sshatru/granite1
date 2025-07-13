@echo off
echo 🚀 Starting ISKCON Granite Website...
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    npm install
    if errorlevel 1 (
        echo ❌ Failed to install dependencies
        pause
        exit /b 1
    )
    echo ✅ Dependencies installed successfully!
    echo.
)

echo 📡 Starting development server...
echo.
echo The website will be available at: http://localhost:5000
echo Press Ctrl+C to stop the server
echo.

REM Try different methods to start the server
npx tsx server/index.ts
if errorlevel 1 (
    echo.
    echo ❌ First method failed, trying alternative...
    node --experimental-modules --es-module-specifier-resolution=node server/index.ts
)

pause