const { app, BrowserWindow } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;

function createWindow() {
  const indexPath = path.join(__dirname, 'front-end', 'index.html');
  console.log('Loading HTML from path:', indexPath);

  
  if (fs.existsSync(indexPath)) {
    console.log('index.html exists, proceeding to load');

    
    mainWindow = new BrowserWindow({
      width: 1080,
      height: 600,
      webPreferences: {
        nodeIntegration: true,  
      },
    });

    
    mainWindow.loadFile(indexPath);

    mainWindow.webContents.openDevTools();  

    mainWindow.on('closed', () => {
      mainWindow = null;
    });
  } else {
    console.error('index.html does not exist at the given path');
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
