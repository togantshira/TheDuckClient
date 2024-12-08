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