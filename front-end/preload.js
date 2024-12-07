const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    getAuthUrl: () => ipcRenderer.invoke('get-auth-url'),
    handleAuthCallback: (url) => ipcRenderer.invoke('handle-auth-callback', url),
    launchGame: (accessToken) => ipcRenderer.invoke('launch-game', accessToken),
});
