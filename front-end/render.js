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


const themeToggle = document.getElementById("themeToggle");


const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    document.body.classList.add(savedTheme);
}

themeToggle.addEventListener("click", () => {
    if (document.body.classList.contains("light-theme")) {
        document.body.classList.replace("light-theme", "dark-theme");
        localStorage.setItem("theme", "dark-theme");
    } else {
        document.body.classList.replace("dark-theme", "light-theme");
        localStorage.setItem("theme", "light-theme");
    }
});


