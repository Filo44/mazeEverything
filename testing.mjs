import { DFSMain } from "./DepthFirstSearch.mjs"
import { mazeGeneratingMain } from "./mazeGeneratingAlgo.mjs"
// import { grid } from "./grid.mjs"

let grid = mazeGeneratingMain(25, 25)

console.log(DFSMain(grid, 25, 25))