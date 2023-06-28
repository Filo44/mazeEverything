export function mazeGeneratingMain(m, n) {
    let grid = []
    const dirArray = ["top", "right", "bottom", "left"]
    const oppositeDir = { "top": "bottom", "bottom": "top", "left": "right", "right": "left" }
    //I is for rows
    //J is for columns
    var min = Infinity
    let gridHArr = []
    var resGridm;



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
    let phase = 0
    while (true) {
        if (phase == 0) {
            // console.log(coords)

            let counter = 0
            coords.forEach(([currentI, currentJ]) => {
                let cellCopy = grid[currentI][currentJ]
                let plausibleChoices = openWalls(cellCopy)
                if (plausibleChoices.length != 0) {
                    let wallChoice = plausibleChoices[Math.floor(Math.random() * plausibleChoices.length)]
                    grid = wallRemovalShenanigans(grid, currentI, currentJ, wallChoice, plausibleChoices)
                }

                counter++
            })
            // let output = util.inspect(grid, { breakLength: 100 });
            // console.log(output)
            phase++
        } else {
            if (nonZeroCoords(grid).length == 0) {
                // console.log(output);
                break
            } else {
                let nonZeroCoordsA = nonZeroCoords(grid)
                let best = Infinity;
                let bestCoordsI = 0
                let bestCoordsJ = 0
                let bestWall = ""
                let currentNonZeroAmount = howMany(0, grid)
                nonZeroCoordsA.forEach(([currentI, currentJ]) => {
                    let cellCopy = grid[currentI][currentJ]
                    let plausibleChoices = openWalls(cellCopy)
                    plausibleChoices.forEach((wallchoice) => {
                        let tempGrid = noChangeWallIHateJs(grid, currentI, currentJ, wallchoice, ["I probably should've chosen a better algo"])
                        let am = howMany(0, tempGrid)
                        if (currentNonZeroAmount - am < best) {
                            best = currentNonZeroAmount - am
                            bestCoordsI = currentI
                            bestCoordsJ = currentJ
                            bestWall = wallchoice
                            // console.log(`bestNum: ${best} bestI: ${bestCoordsI} bestJ: ${bestCoordsJ} bestWall: ${bestWall}`)
                        }
                    })
                })
                grid = wallRemovalShenanigans(grid, bestCoordsI, bestCoordsJ, bestWall, ["I probably should've chosen a better algo"])
                // console.log("done 1,for debugging")
                if (isDone(grid)) {
                    // let output = util.inspect(grid, { breakLength: 100 });
                    // console.log(output)
                    // console.log("alwdflkasjd;flajsd;flajsdl;fkjasd;lfkjas;dlfkjas;lkdfjal;ksdfj;asd;fjlasdjkflasjdlfkkasjdflkasjdfklasjdflkasjd;flasdjflkj")
                    // console.log("alwdflkasjd;flajsd;flajsdl;fkjasd;lfkjas;dlfkjas;lkdfjal;ksdfj;asd;fjlasdjkflasjdlfkkasjdflkasjdfklasjdflkasjd;flasdjflkj")
                    // console.log("alwdflkasjd;flajsd;flajsdl;fkjasd;lfkjas;dlfkjas;lkdfjal;ksdfj;asd;fjlasdjkflasjdlfkkasjdflkasjdfklasjdflkasjd;flasdjflkj")
                    // console.log("alwdflkasjd;flajsd;flajsdl;fkjasd;lfkjas;dlfkjas;lkdfjal;ksdfj;asd;fjlasdjkflasjdlfkkasjdflkasjdfklasjdflkasjd;flasdjflkj")
                    fix(grid)
                    break

                }
            }
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
    function howMany(num, grid) {
        let flatGrid = grid.flatMap((row) => row.map((obj) => obj));
        let i = 0
        flatGrid.forEach(tile => {
            if (tile.num == num) {
                i++
            }
        })
        return i
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
    function wallRemovalShenanigans(grid, currentI, currentJ, wallChoice) {
        // console.log(currentI)
        // console.log(currentJ)
        // console.log(wallChoice)
        let gridLoc = grid
        gridLoc[currentI][currentJ].v = true
        let cellCopy = gridLoc[currentI][currentJ]

        // if (plausibleChoices.length >= 2 || (currentJ == 0 && currentI == 0 && plausibleChoices.length != 0)) {
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
            // console.log(wallChoice)
            // console.log("WTH")
        }
        let smallNum = Math.min(cellCopy.num, wallAdjCell.complete.num)
        let bigNum = Math.max(cellCopy.num, wallAdjCell.complete.num)
        //*Could do recursion instead of just brute force for optimization
        //*Attempting to do so

        wallAdjCell.complete[wallAdjCell.direction] = false

        gridLoc = changeValueFromValue(bigNum, smallNum, grid)
        // minValue(currentI, currentJ, "asldf")
        gridHArr.push(gridLoc)
        // console.log(counter)
        return gridLoc
    }

    function noChangeWallIHateJs(grid, currentI, currentJ, wallChoice) {
        // console.log(currentI)
        // console.log(currentJ)
        // console.log(wallChoice)
        let gridLoc = structuredClone(grid)
        gridLoc[currentI][currentJ].v = true
        let cellCopy = gridLoc[currentI][currentJ]

        // if (plausibleChoices.length >= 2 || (currentJ == 0 && currentI == 0 && plausibleChoices.length != 0)) {
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
            // console.log(wallChoice)
            // console.log("WTH")
        }
        let smallNum = Math.min(cellCopy.num, wallAdjCell.complete.num)
        let bigNum = Math.max(cellCopy.num, wallAdjCell.complete.num)
        //*Could do recursion instead of just brute force for optimization
        //*Attempting to do so

        wallAdjCell.complete[wallAdjCell.direction] = false

        gridLoc = changeValueFromValue(bigNum, smallNum, grid)
        // minValue(currentI, currentJ, "asldf")
        gridHArr.push(gridLoc)
        // console.log(counter)
        return gridLoc
    }
    function fix(grid) {
        let resGrid = structuredClone(grid)
        for (let i = 0; i < resGrid.length; i++) {
            for (let j = 0; j < resGrid[i].length; j++) {
                if (i != 0) {
                    resGrid[i][j].top = resGrid[i][j].top || resGrid[i - 1][j].bottom
                } if (i != resGrid.length - 1) {
                    resGrid[i][j].bottom = resGrid[i][j].bottom || resGrid[i + 1][j].top
                } if (j != resGrid[i].length - 1) {
                    // console.log(`i:${i}, j:${j}`)
                    resGrid[i][j].right = resGrid[i][j].right || resGrid[i][j + 1].left
                } if (j != 0) {
                    resGrid[i][j].left = resGrid[i][j].left || resGrid[i][j - 1].right
                }
            }
        }
        // let output = util.inspect(resGrid, { breakLength: 100 });
        // console.log(output)
        resGridm = resGrid
        return resGrid
    }
    return resGridm
    //*OPTIMIZATIONS:
    //*-Recursion instead of brute force
    //*-Create another array of the tiles which meet the criteria instead of being able to choose ones that do not comply with the criteria
    //Finally figured out why tf it was not working, you can only choose a cell once. It will be solvable due to 
}
// let output = util.inspect(main(25, 25), { breakLength: 100 });
// console.log(output)