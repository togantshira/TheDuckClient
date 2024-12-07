//render.js
//added a simple todo app for functionality test

const button = document.getElementById("button");
button.addEventListener('click', function(){
    const input = document.getElementById("input");
    const ul = document.getElementById("ul");
    
    const todo = input.value;


    const new_li = document.createElement("li");
    new_li.textContent = todo;
    if(!new_li.textContent.trim()){

        input.placeholder = "Enter something !"
        
    }
    else{

        const remove_button = document.createElement("button");
        remove_button.textContent = "remove";
        ul.appendChild(new_li);
        ul.appendChild(remove_button);
        input.value = ""

        remove_button.addEventListener('click', function() {

            ul.removeChild(new_li);
            ul.removeChild(remove_button);

        })

    }
    
    
});
