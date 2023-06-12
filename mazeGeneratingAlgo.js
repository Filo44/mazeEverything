let grid = []
let m = 20
let n = 20
const dirArray = ["top", "right", "bottom", "left"]
const oppositeDir = { "top": "bottom", "bottom": "top", "left": "right", "right": "left" }
//I is for rows
//J is for columns
var min = Infinity
let gridHArr = []
const util = require('util');

let coords = []
for (let i = 0; i < m; i++) {
    grid[i] = []
    for (let j = 0; j < n; j++) {
        coords.push([i, j])
        grid[i][j] = { top: true, right: true, bottom: true, left: true, num: (i * n) + j, v: false }
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
    // console.log(coords)
    let counter = 0
    coords.forEach(([currentI, currentJ]) => {

        grid[currentI][currentJ].v = true
        let cellCopy = grid[currentI][currentJ]

        let plausibleChoices = openWalls(cellCopy)

        // if (plausibleChoices.length >= 2 || (currentJ == 0 && currentI == 0 && plausibleChoices.length != 0)) {
        if (plausibleChoices.length != 0) {
            let wallChoice = plausibleChoices[Math.floor(Math.random() * plausibleChoices.length)]
            cellCopy[wallChoice] = false
            let wallAdjCell = { complete: null, direction: null }
            // console.log(cellCopy.num)
            // console.log(plausibleChoices)
            // console.log(wallChoice)

            if (wallChoice == "top") {
                wallAdjCell.complete = grid[currentI - 1][currentJ]
                wallAdjCell.direction = "bottom"
            } else if (wallChoice == "right") {
                wallAdjCell.complete = grid[currentI][currentJ + 1]
                wallAdjCell.direction = "left"
            } else if (wallChoice == "bottom") {
                wallAdjCell.complete = grid[currentI + 1][currentJ]
                wallAdjCell.direction = "top"
            } else if (wallChoice == "left") {
                wallAdjCell.complete = grid[currentI][currentJ - 1]
                wallAdjCell.direction = "right"
            } else {
                console.log(wallChoice)
                console.log("WTF")
            }
            let smallNum = Math.min(cellCopy.num, wallAdjCell.complete.num)
            let bigNum = Math.max(cellCopy.num, wallAdjCell.complete.num)
            //*Could do recursion instead of just brute force for optimization
            //*Attempting to do so

            wallAdjCell.complete[wallAdjCell.direction] = false

            grid = changeValueFromValue(bigNum, smallNum, grid)
            // minValue(currentI, currentJ, "asldf")
            gridHArr.push(grid)
            // console.log(counter)


            // if (isDone(grid)) {
            //     // let dataString = util.inspect(gridHArr, { depth: null });
            //     // console.log(dataString)
            //     let output = util.inspect(grid, { breakLength: 100 });
            //     console.log(output);
            // }
            counter++
        }
    })
    let output = util.inspect(grid, { breakLength: 100 });
    if (nonZeroCoords(grid).length == 0) {
        console.log(output);
        break
    } else {
        coords = nonZeroCoords(grid)
    }
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
    // console.log(res)
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
    if (grid[i][j] == true) {
        return
    }
    openWallsArr = openWallsArr.filter(val => {
        return val != cameFromWall
    })
    // console.log(openWallsArr ? openWallsArr : "")
    if (openWallsArr.length > 0) {
        openWallsArr.forEach((wall) => {
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
        if (key != "num" && key != "v" && cell[key] == true) {
            plausibleChoices.push(key)
        }
    })
    return plausibleChoices
}
function isDone(grid) {
    let flatGrid = grid.flatMap((row) => row.map((obj) => obj));
    return flatGrid.every(tile => tile.num == 0)
    // if (grid[Math.floor(m / 2) - 1][Math.floor(n / 2) - 1].num == 0) {
    //     return true
    // } else {
    //     false
    // }
}
function nonZeroCoords(grid) {
    // let flatGrid = grid.flatMap((row) => row.map((obj) => obj));
    let i = 0;
    let res = []
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            let element = grid[i][j];
            if (element.num != 0) {
                res.push([i, j])
            }
        }
    }
    return res
}

//*OPTIMIZATIONS:
//*-Recursion instead of brute force
//*-Create another array of the tiles which meet the criteria instead of being able to choose ones that do not comply with the criteria
//Finally figured out why tf it was not working, you can only choose a cell once. It will be solvable due to 