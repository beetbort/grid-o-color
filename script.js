/*
// Can replace changeColor
function lightenColor(event) { 
    if(event.buttons) { 
        this.style.opacity = 1; 
    } else { 
        const currentOpacity = window.getComputedStyle(this).getPropertyValue("opacity");
        this.style.opacity = currentOpacity - 0.1;   
    }
     
}
*/

/*
// Can replace changeColor
// Colors form schemecolor.com Dreamy Unicorn
function changeColorUnicorn(event) { 
    const RAINBOW = ["#C9B1FF", "#FFCAF2", "#FFB2B1", "#FFF3AD", "#BCFFBC", "#A2EDFF"];
    if(event.buttons) { 
        this.style.backgroundColor = "black"; 
    } else { 
        this.style.backgroundColor = RAINBOW[getRandomInt(0,RAINBOW.length - 1)];
    }
     
}
*/

function getRandomInt(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

function changeColor(event) { 
    if(event.buttons) { 
        this.style.backgroundColor = "black"; 
    } else { 
        this.style.backgroundColor = "white";
    }
     
}

function handleClick() { 
    console.log("clicked"); 
    let gridSize = prompt("Enter grid size.");
    if (!gridSize) {
        return;
    }
    gridSize = parseInt(gridSize, 10); 
    if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) { 
        alert("You must enter a number between 1 and 100."); 
    } else {  
        removeGrid(); 
        createGrid(gridSize);
    }
    
}

function removeGrid() { 
    const container = document.querySelector(".container");
    while(container.firstChild) { 
        container.removeChild(container.firstChild); 
    }
}

function createGrid(gridSize) { 
    const container = document.querySelector(".container"); 
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

    for (let i = gridSize * gridSize; i > 0; i--) { 
        container.appendChild(document.createElement("div")); 
    } 

    const divs = document.querySelectorAll(".container div");
    divs.forEach(div => div.addEventListener("mouseover", changeColor));
}

function setupButtonListener() { 
    const newButton = document.querySelector("button"); 
    newButton.addEventListener("click", handleClick); 
}

setupButtonListener(); 
createGrid(16); 


