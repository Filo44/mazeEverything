import { grid } from "./grid.mjs"
import util from "util"
var visitedArray = []

function DFS(i, j, fromI, fromJ, grid) {
    visitedArray.push([i, j])
    grid[i][j].visited = true
    let tile = grid[i][j]
    // console.log(tile)
    // console.log(`j != grid[i].length - 1 ${j != grid[i].length - 1}, && (!tile.right || !grid[i][j + 1].left)=${(!tile.right || !grid[i][j + 1].left)}`)
    // console.log(`i != fromI ${i != fromI} && j + 1 != fromJ`)
    if (j != grid[i].length - 1 && (!tile.right || !grid[i][j + 1].left) && !(i == fromI && j + 1 == fromJ) && !grid[i][j + 1].visited) {
        // console.log("right")
        console.log(visitedArray)
        DFS(i, j + 1, i, j, grid)
        console.log("done")
        visitedArray.push([i, j])
    }
    if (i != grid[i].length - 1 && (!tile.bottom || !grid[i + 1][j].top) && !(i + 1 == fromI && j == fromJ) && !grid[i + 1][j].visited) {
        // console.log("bottom")
        console.log(visitedArray)
        DFS(i + 1, j, i, j, grid)
        console.log("done")
        visitedArray.push([i, j])
    }
    if (j != 0 && (!tile.left || !grid[i][j - 1].right) && !(i == fromI && j - 1 == fromJ) && !grid[i][j - 1].visited) {
        // console.log("left")
        console.log(visitedArray)
        DFS(i, j - 1, i, j, grid)
        console.log("done")
        visitedArray.push([i, j])
    }
    if (i != 0 && (!tile.top || !grid[i - 1][j].bottom) && !(i - 1 == fromI && j + 1 == fromJ) && !grid[i - 1][j].visited) {
        // console.log("bottom")
        console.log(visitedArray)
        DFS(i - 1, j, i, j, grid)
        console.log("done")
        visitedArray.push([i, j])
    }
}
DFS(0, 0, null, null, grid)
console.log(visitedArray)

