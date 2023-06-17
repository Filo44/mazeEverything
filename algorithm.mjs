import { grid } from "./grid.mjs"
import util from "util"
var visitedArray = []

function fix(grid) {
    let resGrid = structuredClone(grid)
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (i != 0) {
                grid[i][j].top = grid[i][j].top || grid[i - 1][j].bottom
            } if (i != grid.length) {
                grid[i][j].bottom = grid[i][j].bottom || grid[i + 1][j].top
            } if (j != grid[i].length) {
                grid[i][j].right = grid[i][j].right || grid[i][j + 1].left
            } if (j != 0) {
                grid[i][j].left = grid[i][j].left || grid[i][j - 1].right
            }
        }
    }
    return resGrid
}

function DFS(i, j, fromI, fromJ, grid) {
    visitedArray.push([i, j])
    let tile = grid[i][j]
    console.log(tile)
    console.log(`j != grid[i].length - 1 ${j != grid[i].length - 1}, && (!tile.right || !grid[i][j + 1].left)=${(!tile.right || !grid[i][j + 1].left)}`)
    console.log(`i != fromI ${i != fromI} && j + 1 != fromJ`)
    if (j != grid[i].length - 1 && (!tile.right || !grid[i][j + 1].left) && !(i == fromI && j + 1 == fromJ)) {
        console.log("right")
        DFS(i, j + 1, i, j, grid)
        visitedArray.push([i, j])
    }
    if (i != grid[i].length - 1 && (!tile.bottom || !grid[i + 1][j].top) && !(i + 1 == fromI && j == fromJ)) {
        console.log("bottom")
        DFS(i + 1, j, i, j, grid)
        visitedArray.push([i, j])
    }
    if (j != 0 && (!tile.left || !grid[i][j - 1].right) && !(i == fromI && j - 1 == fromJ)) {
        console.log("left")
        DFS(i, j - 1, i, j, grid)
        visitedArray.push([i, j])
    }
    if (i != 0 && (!tile.top || !grid[i][j + 1].bottom) && !(i - 1 == fromI && j + 1 == fromJ)) {
        console.log("bottom")
        DFS(i - 1, j, i, j, grid)
        visitedArray.push([i, j])
    }
}
DFS(0, 0, null, null, grid)
console.log(visitedArray)

