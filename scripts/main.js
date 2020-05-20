const body = document.querySelector("body");

const squareDivContainer = document.createElement("div");
squareDivContainer.id = "square-div-container";
body.appendChild(squareDivContainer);

function squareNumber(number){
    return number**2;
}

function createGrid(squareTiles){
    while (squareDivContainer.firstChild) {
      squareDivContainer.removeChild(squareDivContainer.lastChild);
    }

    squareDivContainer.style.gridTemplateRows = 
        `repeat(${squareTiles}, 1fr)`;
    squareDivContainer.style.gridTemplateColumns = 
        `repeat(${squareTiles}, 1fr)`;
    for(let i = 0; i < squareNumber(squareTiles); i++){
        let squareDiv = document.createElement("div");
        squareDiv.id = `square-div-${i}`;
        squareDiv.classList.add("square-div");
        //set mouseover event to fill tile with black
        squareDiv.addEventListener("mouseenter", (e) => {
            squareDiv.style.backgroundColor = "black";
        });

        squareDivContainer.appendChild(squareDiv);
    }
}


const resetGridButton = document.querySelector("button");
const resetGridInput = document.querySelector("#reset-grid-input");

resetGridButton.addEventListener("click", () =>{
    if(isNaN(resetGridInput.value) || resetGridInput.value == 0){
        createGrid(50);
    } else {
        createGrid(resetGridInput.value);
    }
});

createGrid(50);