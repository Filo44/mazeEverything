// import util from "util"
// import { grid } from "./grid.mjs"
export function RandomMain(grid, n, m) {
    let midM = Math.floor((m - 1) / 2)
    let midN = midM
    var visitedArray = []
    var secondRoute = []
    var finished = false

    function DFS(i, j, fromI, fromJ, grid) {
        visitedArray.push([i, j])
        grid[i][j].visited = true
        let tile = grid[i][j]
        if (i == midM && j == midN) {
            finished = true
            // console.log("Length:", visitedArray.length)
            secondRoute.push([i, j])
            return
        }
        // console.log(tile)
        // console.log(`j != grid[i].length - 1 ${j != grid[i].length - 1}, && (!tile.right || !grid[i][j + 1].left)=${(!tile.right || !grid[i][j + 1].left)}`)
        // console.log(`i != fromI ${i != fromI} && j + 1 != fromJ`)
        let plausibleCoordinates = openWalls(grid, i, j)
        let nextCoord = plausibleCoordinates[Math.floor(Math.random() * plausibleCoordinates.length)]
        try {
            DFS(nextCoord[0], nextCoord[1], i, j, grid)
        } catch (error) {
            // console.log(visitedArray)
        }

        if (finished) {
            secondRoute.push([i, j])
        }
    }
    function openWalls(grid, i, j) {
        // console.log(`i:${i},j:${j}`)
        let cell = grid[i][j]
        // console.log(cell)
        let plausibleChoices = []
        let wallDir = []
        Object.keys(cell).forEach((key) => {
            if (key != "num" && key != "v" && cell[key] == false) {
                // console.log(key)
                // console.log("--------")
                wallDir.push(key)
                let cond1 = false
                switch (key) {
                    case "left":
                        if (j > 0 && grid[i][j - 1].v == true) {
                            plausibleChoices.push([i, j - 1])
                            // console.log("left")
                        }
                        break
                    case "right":
                        if (j < grid[i].length && grid[i][j + 1].v == true) {
                            plausibleChoices.push([i, j + 1])
                            // console.log("right")
                        }
                        break
                    case "top":
                        if (i > 0 && grid[i - 1][j].v == true) {
                            plausibleChoices.push([i - 1, j])
                            // console.log("top")
                        }
                        break
                    case "bottom":
                        if (i < grid.length && grid[i + 1][j].v == true) {
                            plausibleChoices.push([i + 1, j])
                            // console.log("bottom")
                        }
                        break
                }
                // console.log("--------")
            }
        })
        // console.log(wallDir)
        // console.log("plausibleChoices:")
        // console.log(plausibleChoices)
        return plausibleChoices
    }
    DFS(0, 0, null, null, grid)
    // let output = util.inspect(JSON.stringify(secondRoute), { maxStringLength: Infinity });
    // console.log(output)
    // console.log(secondRoute)
    return [visitedArray.length, secondRoute.length]
}
// console.log(DFSMain(grid, 25, 25))