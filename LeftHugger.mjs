import { grid } from "./grid.mjs"
import util from "util"
function main(grid) {
    var visitedArray = []
    const dirData = [
        { name: "top", opposite: "bottom", addI: -1, addJ: 0 },
        { name: "right", opposite: "left", addI: 0, addJ: 1 },
        { name: "bottom", opposite: "top", addI: 1, addJ: 0 },
        { name: "left", opposite: "right", addI: 0, addJ: -1 }
    ]
    let direction = 1
    let finished = false
    let testingDict = { "top": 0, "right": 1, "bottom": 2, "left": 3 }
    function removeCoordinates(array) {
        const seenCoordinates = new Map();
        const result = [];

        for (const [x, y] of array) {
            const coordinate = `${x},${y}`;

            if (seenCoordinates.has(coordinate)) {
                const [prevX, prevY] = seenCoordinates.get(coordinate);
                const removeIndex = result.findIndex(([x, y]) => x === prevX && y === prevY);
                result.splice(removeIndex, result.length - removeIndex);
            }

            seenCoordinates.set(coordinate, [x, y]);
            result.push([x, y]);
        }

        return result;
    }
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
            let modulee = (correctIndex % 4) < 0 ? 4 + (correctIndex % 4) : (correctIndex % 4)
            let data = dirData[modulee]
            // console.log(data.name)
            //&& (fromI != (i + data.addI) && fromJ != (j + data.addJ))
            if ((i + data.addI) < grid.length && (i + data.addI) >= 0 && (j + data.addJ) < grid[i].length && (j + data.addJ) >= 0 && !tile[data.name]) {
                // console.log(direction)
                // console.log(data.name)
                // console.log("^^")
                // console.log(`correctIndex:${correctIndex}, it:${it}`)
                // console.log(`Supposed to be:${testingDict[data.name]}`) 
                direction = testingDict[data.name]
                // console.log(direction)
                try {
                    Hug(i + data.addI, j + data.addJ, i, j, grid)
                } catch (error) {
                    console.log("Stack overflow error occurred:", error);
                }

                break
            }
        }
    }
    Hug(0, 0, null, null, grid)
    let output = util.inspect(JSON.stringify(visitedArray), { maxStringLength: Infinity });
    console.log(output)
    let output2 = util.inspect(JSON.stringify(removeCoordinates(visitedArray)), { maxStringLength: Infinity });
    console.log(output2)
    return [visitedArray.length, removeCoordinates(visitedArray).length]
}
main(grid)
