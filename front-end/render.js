//render.js

const launchButton = document.getElementById('launchButton');

launchButton.addEventListener('click', async () => {
    try {
        await window.electronAPI.launchGame();
        console.log('Minecraft is launching...');
    } catch (error) {
        console.error('Error launching Minecraft:', error);
    }
});
