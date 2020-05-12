function changeColor(event) { 
    if(event.buttons) { 
        this.style.backgroundColor = "red"; 
    } else { 
        this.style.backgroundColor = "black";
    }
     
}

function createGrid() { 
    let gridSize = 16; 

    const container = document.querySelector(".container"); 
    for (let i = gridSize * gridSize; i > 0; i--) { 
        container.appendChild(document.createElement("div")); 
    } 

    const divs = document.querySelectorAll(".container div");
    divs.forEach(div => div.addEventListener("mouseover", changeColor));
}

createGrid(); 


