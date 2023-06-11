let grid = []
let m = 5
let n = 5
const dirArray = ["top", "right", "bottom", "left"]
const oppositeDir = { "top": "bottom", "bottom": "top", "left": "right", "right": "left" }
//I is for rows
//J is for columns
var min = Infinity

for (let i = 0; i < m; i++) {
    grid[i] = []
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

    // let plausibleChoices = []
    // Object.keys(cellCopy).forEach((key) => {
    //     if (key != "num" && cellCopy[key] == true) {
    //         plausibleChoices.push(key)
    //     }
    // })
    let plausibleChoices = openWalls(cellCopy)

    if (plausibleChoices.length != 0) {
        let wallChoice = plausibleChoices[Math.floor(Math.random() * plausibleChoices.length)]
        cellCopy[wallChoice] = false
        let wallAdjCell = { complete: null, direction: null }
        console.log(plausibleChoices)
        console.log(wallChoice)
        console.log(grid)
        if (wallChoice == "top") {
            wallAdjCell.complete = grid[currentI - 1][currentJ]
            wallAdjCell.direction = "bottom"
            console.log(wallChoice)
        } else if (wallChoice == "right") {
            wallAdjCell.complete = grid[currentI][currentJ + 1]
            wallAdjCell.direction = "left"
            console.log(wallChoice)
        } else if (wallChoice == "bottom") {
            wallAdjCell.complete = grid[currentI + 1][currentJ]
            wallAdjCell.direction = "top"
            console.log(wallChoice)
        } else if (wallChoice == "left") {
            wallAdjCell.complete = grid[currentI][currentJ - 1]
            wallAdjCell.direction = "right"
            console.log(wallChoice)
        }
        console.log(wallAdjCell)
        let smallNum = Math.min(cellCopy.num, wallAdjCell.complete.num)
        let bigNum = Math.max(cellCopy.num, wallAdjCell.complete.num)
        //*Could do recursion instead of just brute force for optimization

        cellCopy.num = smallNum
        wallAdjCell.complete.num = smallNum
        wallAdjCell.complete[wallAdjCell.direction] = false
        // grid = changeValueFromValue(bigNum, smallNum, grid)
        minValue(currentI, currentJ, "asldf")
    }
    //Make it choose a cell from a list where there are only tiles where there 
}

function changeValueFromValue(searchValue, instertValue, grid) {
    let res = []
    for (let i = 0; i < grid.length; i++) {
        res[i] = []
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j].num == searchValue) {
                res[i][j] = { ...grid[i][j], num: instertValue }
            } else {
                res[i][j] = grid[i][j]
            }
        }
    }
    console.log(res)
    return res
}
// function recursiveValueChange(i, j, wall) {
//     min = Infinity
// }
function minValue(i, j, cameFromWall) {
    min = Math.min(grid[i][j].num, min)
    let openWallsArr = openWalls(grid[i][j])
    // console.log(cameFromWall)
    // console.log(openWallsArr ? openWallsArr : "")
    openWallsArr = openWallsArr.filter(val => {
        return val != cameFromWall
    })
    // console.log(openWallsArr ? openWallsArr : "")
    if (openWallsArr.length > 0) {
        openWalls(grid[i][j]).forEach((wall) => {
            if (wall == "top") {
                minValue(i - 1, j, oppositeDir[wall])
            } else if (wall == "right") {
                minValue(i, j + 1, oppositeDir[wall])
            } else if (wall == "bottom") {
                minValue(i + 1, j, oppositeDir[wall])
            } else if (wall == "left") {
                minValue(i, j - 1, oppositeDir[wall])
            }
        })
    }
}
function openWalls(cell) {
    let plausibleChoices = []
    Object.keys(cell).forEach((key) => {
        if (key != "num" && cell[key] == true) {
            plausibleChoices.push(key)
        }
    })
    return plausibleChoices
}