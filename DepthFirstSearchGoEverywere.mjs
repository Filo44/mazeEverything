import { grid } from "./grid.mjs"
import util from "util"
function main(grid) {
    var visitedArray = []
    var secondRoutes = []
    var currentRoute = []
    let finished = false

    function DFS(i, j, fromI, fromJ, grid) {
        visitedArray.push([i, j])
        currentRoute.push([i, j])
        grid[i][j].visited = true
        let tile = grid[i][j]
        if (i == 9 && j == 9) {
            // finished = true
            console.log("Length:", visitedArray.length)
            secondRoutes.push([...currentRoute])
        }
        // console.log(tile)
        // console.log(`j != grid[i].length - 1 ${j != grid[i].length - 1}, && (!tile.right || !grid[i][j + 1].left)=${(!tile.right || !grid[i][j + 1].left)}`)
        // console.log(`i != fromI ${i != fromI} && j + 1 != fromJ`)
        if (j != grid[i].length - 1 && (!tile.right || !grid[i][j + 1].left) && !(i == fromI && j + 1 == fromJ) && !grid[i][j + 1].visited && finished == false) {
            // console.log("right")
            // console.log(visitedArray)
            DFS(i, j + 1, i, j, grid)
            //console.log("done")
            visitedArray.push([i, j])
        }
        if (i != grid[i].length - 1 && (!tile.bottom || !grid[i + 1][j].top) && !(i + 1 == fromI && j == fromJ) && !grid[i + 1][j].visited && finished == false) {
            // console.log("bottom")
            // console.log(visitedArray)
            DFS(i + 1, j, i, j, grid)
            //console.log("done")
            visitedArray.push([i, j])
        }
        if (j != 0 && (!tile.left || !grid[i][j - 1].right) && !(i == fromI && j - 1 == fromJ) && !grid[i][j - 1].visited && finished == false) {
            // console.log("left")
            // console.log(visitedArray)
            DFS(i, j - 1, i, j, grid)
            //console.log("done")
            visitedArray.push([i, j])
        }
        if (i != 0 && (!tile.top || !grid[i - 1][j].bottom) && !(i - 1 == fromI && j + 1 == fromJ) && !grid[i - 1][j].visited && finished == false) {
            // console.log("bottom")
            // console.log(visitedArray)
            DFS(i - 1, j, i, j, grid)
            //console.log("done")
            visitedArray.push([i, j])
        }
        currentRoute.pop()

    }
    DFS(0, 0, null, null, grid)
    let output = util.inspect(JSON.stringify(visitedArray), { maxStringLength: Infinity });
    // console.log(output)
    // console.log(secondRoutes.sort((a, b) => a.length - b.length)[0])
    return [visitedArray.length, secondRoutes.sort((a, b) => a.length - b.length)[0].length]
}
console.log(main(grid))
