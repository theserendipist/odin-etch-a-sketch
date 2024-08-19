// Etch-A-Sketch Game

// Create grid function
function newGrid(n) {
    for (let i = 0; i < n; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let j = 0; j < n; j++) {
            const div = document.createElement('div');
            div.classList.add('square');
        
            row.appendChild(div);
       
            // Add hover effect
            div.addEventListener("mouseenter", () => {
                div.style.backgroundColor = "red";
            });
        }
    };
}

// Intial 16*16 grid setup
const container = document.querySelector('#container');

newGrid(n = 16);

// New Sketch function
const btn = document.querySelector('#new');

btn.addEventListener("click", () => {
    // Empty container
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }

    // Ask for new grid size and check if it's between 0 and 100
    let nSquares = prompt('How many squares should there be on one side of the grid?')
    while (nSquares < 0 || nSquares > 100) {
        nSquares = prompt('Please type a number between 0 and 100!')
    }
    
    // Draw new grid
    newGrid(n = nSquares);
})