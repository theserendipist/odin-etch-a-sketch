// Etch-A-Sketch Game

//Basic setup of 16*16 grid
const container = document.querySelector('#container');

const nSquares = 16*16

// Create grid
for (let i = 0; i < nSquares; i ++) {
    const div = document.createElement('div');
    div.classList.add('square');

    container.appendChild(div);
    
    // Add hover effect
    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "red";
    });
}