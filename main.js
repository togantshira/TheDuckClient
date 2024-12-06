const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  // Create a new browser window
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,  // Allows Node.js features in the renderer process
    },
  });

  // Load the HTML file from the 'front-end' folder
  mainWindow.loadFile(path.join(__dirname, 'front-end', 'index.html'));

  // Open DevTools (optional)
  mainWindow.webContents.openDevTools();

  // Close the app when the window is closed
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// When Electron has finished initialization, create the window
app.whenReady().then(createWindow);

// Quit the app when all windows are closed (on Windows/macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Re-create the window if the app is activated (macOS)
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
