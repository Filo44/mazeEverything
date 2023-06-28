import { DFSEMain } from "./DepthFirstSearchGoEverywere.mjs"
import { DFSMain } from "./DepthFirstSearch.mjs"
import { LeftHuggerMain } from "./LeftHugger.mjs"
import { mazeGeneratingMain } from "./mazeGeneratingAlgo.mjs"

let times = 10
let sizes = [15, 20, 25, 30]
let results = [["DFS 1", "DFS 2", "DFSE 1", "DFSE 2", "LH 1", "LH 2"]]

//*Add a for each loop for the sizes and embed the next code into that
let m = 20
let n = 20
for (let i = 0; i < times; i++) {
    let grid = mazeGeneratingMain(20, 20)
    console.log(grid)
    let DFSERes = DFSEMain(grid, n, m)
    let DFSRes = DFSMain(grid, n, m)
    let LeftHuggerRes = LeftHuggerMain(grid, n, m)
    results.push(DFSRes[0], DFSRes[1], DFSERes[0], DFSERes[0], LeftHuggerRes[0], LeftHuggerRes[0])
}
console.log(results)