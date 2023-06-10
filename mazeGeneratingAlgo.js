let grid = []
let m = 5
let n = 5
const dirArray = ["top", "right", "bottom", "left"]

//I is for rows
//J is for columns

for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        grid[i][j] = { top: true, right: true, bottom: true, left: true, num: (i * n) + j }
        if (j == 0) {
            grid[i][j].left = false
        } else if (j == n - 1) {
            grid[i][j].right = false
        }
        if (i == 0) {
            grid[i][j].top = false
        } else if (i == n - 1) {
            grid[i][j].bottom = false
        }
        //Fix for edge pls
    }
}

while (true) {
    let ranCellNum = Math.floor(Math.random() * (n * m))
    let currentI = Math.floor(ranCellNum / n)
    let currentJ = ranCellNum % n
    let cellCopy = grid[currentI][currentJ]

    let plausibleChoices = []
    Object.keys(cellCopy).forEach((key) => {
        if (key != "num" && cellCopy[key] == true) {
            plausibleChoices.push(key)
        }
    })
    if (plausibleChoices.length != 0) {
        let wallChoice = plausibleChoices[Math.floor(Math.random() * plausibleChoices.length)]
        cellCopy[wallChoice] = false
        let wallAdjCell = { complete: null, direction: null }
        if (wallChoice == "top") {
            cellCopy.num = Math.min(cellCopy.num, grid[currentI - 1][currentJ].num)
            wallAdjCell.complete = grid[currentI - 1][currentJ]
            direction = "bottom"
            grid[currentI - 1][currentJ].bottom = false
        } else if (wallChoice == "right") {
            wallAdjCell.complete = grid[currentI][currentJ - 1]
            direction = "left"
        } else if (wallChoice == "bottom") {
            wallAdjCell.complete = grid[currentI + 1][currentJ]
            direction = "top"
        } else if (wallChoice == "left") {
            wallAdjCell.complete = grid[currentI][currentJ + 1]
            direction = "right"
        }
        let smallNum = Math.min(cellCopy.num, wallAdjCell.complete.num)
        cellCopy.num = smallNum
        wallAdjCell.complete.num = smallNum
        wallAdjCell.complete[wallAdjCell.direction] = false
    }
    //Make it choose a cell from a list where there are only tiles where there 
}