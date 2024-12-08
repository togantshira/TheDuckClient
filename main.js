// main.js
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { launch } = require('@xmcl/core');  //using xmlc

let mainWindow;


app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1080,
        height: 1080,
        webPreferences: {
            preload: path.join(__dirname, 'front-end', 'preload.js'),  // using a secure bridge
        },
    });



    // Load the HTML file from the frontend folder
    mainWindow.loadFile(path.join(__dirname, 'front-end', 'index.html'));
    mainWindow.setMenuBarVisibility(false);  // Hide menu bar
    mainWindow.webContents.openDevTools();  // Open DevTools for debugging
});

// Handle 'launch-game' request from renderer process
ipcMain.handle('launch-game', async () => {
    const minecraftDir = path.join(process.env.APPDATA, '.minecraft'); // Minecraft directory path
    const javaPath = "C:\\Program Files\\Eclipse Adoptium\\jdk-17.0.13.11-hotspot\\bin\\java.exe"; //change this to your path
    const version = '1.20.1'; // Minecraft version

    try {
        // Launch Minecraft with the specified game path, java path, and version
        const proc = await launch({
            gamePath: minecraftDir,
            javaPath: javaPath,
            version: version,
        });

        console.log('Minecraft is launching...');

        // Debugging outputs
        proc.on('exit', (code) => {
            console.log(`Minecraft exited with code ${code}`);
        });

        proc.on('error', (err) => {
            console.error('Error during launch:', err);
        });
    } catch (err) {
        console.error('Error launching Minecraft:', err);
    }
});


