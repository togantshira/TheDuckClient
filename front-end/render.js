
const launchButton = document.getElementById('launchButton');


launchButton.addEventListener('click', async () => {
    try {

        await window.electronAPI.launchGame();

        console.log('Minecraft is launching...');

    } catch (error) {
        console.error('Error launching Minecraft:', error);
    }
});


function attachThemeToggleListener() {
    const themeToggle = document.getElementById("themeToggle");

   
    if (!themeToggle) return;

 
    const savedTheme = localStorage.getItem("theme");

  
    if (savedTheme) {
        document.body.classList.add(savedTheme);
        updateButtonClasses(savedTheme); 
    } else {
      
        document.body.classList.add("light-theme");
        localStorage.setItem("theme", "light-theme");
        updateButtonClasses("light-theme"); 
    }


    themeToggle.addEventListener("click", () => {
       
        if (document.body.classList.contains("light-theme")) {

           
            document.body.classList.replace("light-theme", "dark-theme");
            localStorage.setItem("theme", "dark-theme");  
            updateButtonClasses("dark-theme");  

        } else {

            // Switch to light theme
            document.body.classList.replace("dark-theme", "light-theme");
            localStorage.setItem("theme", "light-theme");  // Save the light theme in localStorage
            updateButtonClasses("light-theme");  // Update button styles for light theme


        }
    });
}


function updateButtonClasses(theme) {

    
    const versionButtons = document.querySelectorAll('.version-dark, .version-light');
    const launchButtons = document.querySelectorAll('.launch-dark, .launch-light');
    const navButtons = document.querySelectorAll('.nav-button-dark, .nav-button-light');
    

    const homeButton = document.getElementById('home-button');
    const modButton = document.getElementById('mod-button');
    const shopButton = document.getElementById('shop-button');
    const themeButton = document.getElementById('themeToggle');



    if (theme === "light-theme") {

        versionButtons.forEach(button => {

            button.classList.remove('version-dark');
            button.classList.add('version-light');
            
        });
        launchButtons.forEach(button => {

            button.classList.remove('launch-dark');
            button.classList.add('launch-light');
        });
        navButtons.forEach(button => {

            button.classList.remove('nav-button-dark');
            button.classList.add('nav-button-light');

        });

        // Update nav buttons for light theme

        if (homeButton) homeButton.classList.replace('home-button-dark', 'home-button-light');
        if (modButton) modButton.classList.replace('mod-button-dark', 'mod-button-light');
        if (shopButton) shopButton.classList.replace('shop-button-dark', 'shop-button-light');
        if (themeButton) themeButton.classList.replace('theme-button-dark', 'theme-button-light');

    } else if (theme === "dark-theme") {
        // Dark theme styles


        versionButtons.forEach(button => {
            button.classList.remove('version-light');
            button.classList.add('version-dark');

        });

        
        launchButtons.forEach(button => {
            button.classList.remove('launch-light');
            button.classList.add('launch-dark');

        });


        navButtons.forEach(button => {
            button.classList.remove('nav-button-light');
            button.classList.add('nav-button-dark');

        });

        // Update nav buttons for dark theme
        if (homeButton){

            homeButton.classList.replace('home-button-light', 'home-button-dark');

        } 

        if (modButton) {

            modButton.classList.replace('mod-button-light', 'mod-button-dark');

        }

        if (shopButton) {

            shopButton.classList.replace('shop-button-light', 'shop-button-dark');

        } 

        if (themeButton){

            themeButton.classList.replace('theme-button-light', 'theme-button-dark');

        } 
    }
}

// Function to handle section toggling
document.querySelectorAll('.toggle').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 

        const targetId = this.getAttribute('data-target');

        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active'); 
        });

        const targetSection = document.getElementById(targetId);
        targetSection.classList.add('active'); 
    });
});

// Call the function when the page is loaded
document.addEventListener("DOMContentLoaded", () => {
    attachThemeToggleListener();
});










