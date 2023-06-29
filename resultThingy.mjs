console.log("alsdfjla;sdfj;alskdjfl;aksdjf;laskdfjl")
import { DFSEMain } from "./DepthFirstSearchGoEverywere.mjs"
import { DFSMain } from "./DepthFirstSearch.mjs"
import { LeftHuggerMain } from "./LeftHugger.mjs"
import { mazeGeneratingMain } from "./mazeGeneratingAlgo.mjs"
import { RandomMain } from "./random.mjs"
import util from "util"

let times = 10
let sizes = [15, 20, 25, 30]


function roundToSigFig(number, sigFig) {
    if (number === 0) {
        return 0;
    }

    const multiplier = Math.pow(10, sigFig - Math.floor(Math.log10(Math.abs(number))) - 1);
    return Math.round(number * multiplier) / multiplier;
}
console.log("alsdfjla;sdfj;alskdjfl;aksdjf;laskdfjl")
//*Add a for each loop for the sizes and embed the next code into that
// let m = 15
// let n = 15
sizes.forEach((size) => {
    let results = [["DFS 1", "DFS 2", "DFSE 1", "DFSE 2", "LH 1", "LH 2", "R"]]
    let m = size
    let n = size
    let i = undefined;
    for (let i = 0; i < times; i++) {
        let grid;
        while (true) {
            // console.log("Attempting")
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
        let gridCopy1 = structuredClone(grid)
        let gridCopy2 = structuredClone(grid)
        let gridCopy3 = structuredClone(grid)
        let gridCopy4 = structuredClone(grid)
        // let output = util.inspect(JSON.stringify(grid), { maxStringLength: Infinity });
        // console.log("grid:", output)
        // console.log(grid)
        let DFSERes = DFSEMain(gridCopy1, n, m)
        // console.log("DFSERes", DFSERes)
        let DFSRes = DFSMain(gridCopy2, n, m)
        // console.log("DFSRes", DFSRes)
        let LeftHuggerRes = LeftHuggerMain(gridCopy3, n, m)
        // console.log("LeftHuggerRes", LeftHuggerRes)
        let RandomRes = RandomMain(gridCopy4, n, m)
        console.log("RandomRes", RandomRes)
        results.push([roundToSigFig(DFSERes[1] / DFSRes[0], 5) * 100, roundToSigFig(DFSERes[1] / DFSRes[1], 5) * 100, roundToSigFig(DFSERes[1] / DFSERes[0], 5) * 100, roundToSigFig(DFSERes[1] / DFSERes[1], 5) * 100, roundToSigFig(DFSERes[1] / LeftHuggerRes[0], 5) * 100, roundToSigFig(DFSERes[1] / LeftHuggerRes[1], 5) * 100, roundToSigFig(DFSERes[1] / RandomRes[0], 5) * 100])
    }
    console.log(results)
})
