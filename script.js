const container = document.getElementById("container");
const cell = document.createElement("div");
cell.classList = "cell";
const createGridButton = document.getElementById("createGridButton");

const createGrid = (length) => {
    container.replaceChildren();
    if (length > 0 && length <= 100) {
        for (let rows = 0; rows < length; rows++) {
            for (let columns = 0; columns < length; columns++) {
                const cell = document.createElement("div");
                console.log(cell);
                container.appendChild(cell);
                cell.classList = "cell";
                let basis = 
                cell.style.width = `${((1 / length) * 100)}%`;
                cell.style.height = `${((1 / length) * 100)}%`
            }
        }
    }
    else {
        alert("Error: Please enter valid number 1-100");
    }
}

cell.addEventListener("mouseover", () => {
cell.classList.add("highlighted");
})

cell.addEventListener("mouseout", () => {
    cell.classList.remove("highlighted");
})

createGridButton.addEventListener("click", () => {
    let length = prompt("How many squares would you like per side? (Max 100)");
    createGrid(length);
})


