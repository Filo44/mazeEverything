console.log("alsdfjla;sdfj;alskdjfl;aksdjf;laskdfjl")
import { DFSEMain } from "./DepthFirstSearchGoEverywere.mjs"
import { DFSMain } from "./DepthFirstSearch.mjs"
import { LeftHuggerMain } from "./LeftHugger.mjs"
import { mazeGeneratingMain } from "./mazeGeneratingAlgo.mjs"
import util from "util"

let times = 10
let sizes = [15, 20, 25, 30]
let results = [["DFS 1", "DFS 2", "DFSE 1", "DFSE 2", "LH 1", "LH 2"]]

console.log("alsdfjla;sdfj;alskdjfl;aksdjf;laskdfjl")
//*Add a for each loop for the sizes and embed the next code into that
let m = 25
let n = 25
for (let i = 0; i < times; i++) {
    let grid;
    while (true) {
        console.log("Attempting")
        let exit = true
        try {
            grid = mazeGeneratingMain(n, m)
        } catch {
            exit = false
        }
        if (exit) {
            break
        }
    }

    let output = util.inspect(JSON.stringify(grid), { maxStringLength: Infinity });
    console.log("grid:", output)
    // console.log(grid)
    let DFSERes = DFSEMain(grid, n, m)
    console.log("DFSERes", DFSERes)
    let DFSRes = DFSMain(grid, n, m)
    console.log("DFSRes", DFSRes)
    let LeftHuggerRes = LeftHuggerMain(grid, n, m)
    console.log("LeftHuggerRes", LeftHuggerRes)
    results.push([DFSRes[0], DFSRes[1], DFSERes[0], DFSERes[1], LeftHuggerRes[0], LeftHuggerRes[1]])
}
console.log(results)