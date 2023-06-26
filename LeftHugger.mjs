import { grid } from "./grid.mjs"
import util from "util"
var visitedArray = []
const dirData = [
    { name: "top", opposite: "bottom", addI: -1, addJ: 0 },
    { name: "right", opposite: "left", addI: 0, addJ: 1 },
    { name: "bottom", opposite: "top", addI: 1, addJ: 0 },
    { name: "left", opposite: "right", addI: 0, addJ: -1 }
]
let direction = 1
let finished = false

function Hug(i, j, fromI, fromJ, grid) {
    visitedArray.push([i, j])
    grid[i][j].visited = true
    let tile = grid[i][j]
    if (i == 9 && j == 9) {
        finished = true
        console.log("Length:", visitedArray.length)
        return
    }
    for (let it = 0; it < 4; it++) {
        let correctIndex = (direction + it - 1)
        let data = dirData[correctIndex % 4]
        //&& (fromI != (i + data.addI) && fromJ != (j + data.addJ))
        if ((i + data.addI) < grid.length && (i + data.addI) >= 0 && (j + data.addJ) < grid[i].length && (j + data.addJ) >= 0 && !tile[data.name]) {
            direction = correctIndex + i + 1 % 4
            Hug(i + data.addI, j + data.addJ, i, j, grid)

            break
        }
    }
}
Hug(0, 0, null, null, grid)
let output = util.inspect(JSON.stringify(visitedArray), { maxStringLength: Infinity });
console.log(output)

