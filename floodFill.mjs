// import util from "util"
import { grid } from "./grid.mjs"
export function FloodFillMain(grid, n, m) {
    let midM = Math.floor((m - 1) / 2)
    let midN = midM
    var visitedArray = []
    var secondRoute = []
    var finished = false

    function openWalls(grid, i, j) {
        // console.log(`i:${i},j:${j}`)
        let cell = grid[i][j]
        // console.log(cell)
        let plausibleChoices = []
        let wallDir = []
        Object.keys(cell).forEach((key) => {
            if (key != "num" && key != "v" && cell[key] == false) {
                // console.log(key)
                // console.log(`i:${i},j:${j}`)
                // console.log(grid.length)
                wallDir.push(key)
                let cond1 = false
                switch (key) {
                    case "left":
                        if (j > 0 && grid[i][j - 1].visited != true) {
                            plausibleChoices.push([i, j - 1])
                            // console.log("left")
                        }
                        break
                    case "right":
                        if (j < grid[i].length - 1 && grid[i][j + 1].visited != true) {
                            plausibleChoices.push([i, j + 1])
                            // console.log("right")
                        }
                        break
                    case "top":
                        if (i > 0 && grid[i - 1][j].visited != true) {
                            plausibleChoices.push([i - 1, j])
                            // console.log("top")
                        }
                        break
                    case "bottom":
                        if (i < grid.length - 1 && grid[i + 1][j].visited != true) {
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

    function DFS(i, j, fromI, fromJ, grid) {
        visitedArray.push([i, j])
        grid[i][j].visited = true
        let tile = grid[i][j]
        // console.log("i", i)
        // console.log("j", j)
        if (i == midM && j == midN) {
            finished = true
            // console.log("Length:", visitedArray.length)
            secondRoute.push([i, j])
            return
        }
        if (finished) {
            secondRoute.push([i, j])
            return
        }
        // console.log(tile)
        // console.log(`j != grid[i].length - 1 ${j != grid[i].length - 1}, && (!tile.right || !grid[i][j + 1].left)=${(!tile.right || !grid[i][j + 1].left)}`)
        // console.log(`i != fromI ${i != fromI} && j + 1 != fromJ`)
        let plausibleTiles = openWalls(grid, i, j)
        plausibleTiles.sort((a, b) => {
            let distA = Math.abs(9 - a[0]) + Math.abs(9 - a[1])
            let distB = Math.abs(9 - b[0]) + Math.abs(9 - b[1])
            return distA - distB
        })
        plausibleTiles.forEach((coordinates) => {
            DFS(coordinates[0], coordinates[1], i, j, grid)
            visitedArray.push([i, j])
        })
    }
    DFS(0, 0, null, null, grid)
    // let output = util.inspect(JSON.stringify(visitedArray), { maxStringLength: Infinity });
    // console.log(output)
    // console.log(secondRoute)
    return [visitedArray.length, secondRoute.length]
}
// console.log(FloodFillMain(grid, 25, 25))