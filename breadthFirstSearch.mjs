import { grid } from "./grid.mjs"
import util from "util"
var visitedArray = [[0, 0]]
var secondRoute = []
let finished = false

function openWalls(grid, i, j) {
    // console.log(`i:${i},j:${j}`)
    let cell = grid[i][j]
    let plausibleChoices = []
    let wallDir = []
    Object.keys(cell).forEach((key) => {
        if (key != "num" && key != "v" && cell[key] == false) {
            // console.log(key)
            // console.log("--------")
            wallDir.push(key)
            let cond1 = false
            switch (key) {
                case "left":
                    if (j > 0) {
                        plausibleChoices.push([i, j - 1])
                        // console.log("left")
                    }
                    break
                case "right":
                    if (j < grid[i].length) {
                        plausibleChoices.push([i, j + 1])
                        // console.log("right")
                    }
                    break
                case "top":
                    if (i > 0) {
                        plausibleChoices.push([i - 1, j])
                        // console.log("top")
                    }
                    break
                case "bottom":
                    if (i < grid.length) {
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


function BFS(i, j, fromI, fromJ, grid) {
    //Appends coords to the visited array
    //Checks open walls and pushes these coordinates into the array
}
function main() {
    //Check open walls and append them to the check routes array for the first tile
    let firstCoords = openWalls(grid, 0, 0)
    // console.log(firstCoords)
    let checkRoutes = firstCoords.map(singleCoords => {
        return [singleCoords]
    })
    console.log("checkRoutes:", checkRoutes)
    // console.log(checkRoutes)
    //While true loop
    while (true) {
        //Reverse the array checkroutes so it looks more efficient, also keep track if it is the last element and if so and it has multiple choices don't add the reverse
        //For now just check if there is only one don't add the reverse
        // console.log("checkRoutes:", checkRoutes)
        checkRoutes.forEach((route) => {
            // console.log(route)
            //For each route append it to the visitedArray, then the reverse
            let reversedArray = route.slice()
            reversedArray.reverse()
            visitedArray.push(...route)
            visitedArray.push(...reversedArray)
            // console.log("visitedArray: ", visitedArray)
            //Check the walls on the last element in that route
            let tempI = route[route.length - 1][0]
            let tempJ = route[route.length - 1][1]
            let plausibleChoices = openWalls(grid, tempI, tempJ)
            //Store a duplicate of that route
            let copyOfRoute = route.slice()
            //Delete the original root from the checkRoutes array
            checkRoutes.shift()
            //Loop through all of the open walls coordinates and append the previous route plus these coordinates for each one whilst checking if these new coordinates are the center
            let exit = false
            plausibleChoices.forEach(choice => {
                checkRoutes.push([...copyOfRoute, choice])
                if (choice[0] == 9 && choice[1] == 9) {
                    exit = true
                }
            })
            if (exit) {
                return
            }
        })
        console.log("checkRoutes:", checkRoutes)
        console.log("visitedArray:", visitedArray)
        console.log("iteration done")
    }

}

main()
// console.log(openWalls(grid, 7, 6))
let output = util.inspect(JSON.stringify(visitedArray), { maxStringLength: Infinity });
console.log(output)

