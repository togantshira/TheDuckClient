// renderer.js
const { ipcRenderer } = require('electron');

// Example: Send message to main process
ipcRenderer.send('message', 'Hello from Renderer!');