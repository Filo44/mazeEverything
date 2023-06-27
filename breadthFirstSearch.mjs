import { grid } from "./grid.mjs"
import util from "util"
var visitedArray = []
var secondRoute = []
let finished = false

function openWalls(grid, i, j) {
    let cell = grid[i][j]
    let plausibleChoices = []
    Object.keys(cell).forEach((key) => {
        if (key != "num" && key != "v" && cell[key] == true) {
            let cond1 = false
            switch (key) {
                case "left":
                    if (j > 0) {
                        plausibleChoices.push([i, j - 1])
                    }

                case "right":
                    if (j < grid[i].length) {
                        plausibleChoices.push([i, j + 1])
                    }

                case "top":
                    if (i > 0) {
                        plausibleChoices.push([i - 1, j])
                    }

                case "bottom":
                    if (i < grid.length) {
                        plausibleChoices.push([i + 1, j])
                    }

                    plausibleChoices.push(key)
            }
        }
    })
    return plausibleChoices
}


function BFS(i, j, fromI, fromJ, grid) {
    //Appends coords to the visited array
    //Checks open walls and pushes these coordinates into the array
}
function main() {
    //Check open walls and append them to the check routes array for the first tile
    let checkRoutes = []
    checkRoutes.push(openWalls)
    //While true loop
    while (true) {
        checkRoutes.forEach((route) => {
            //For each route append it to the visitedArray, then the reverse
            let reversedArray = route.slice()
            reversedArray.reverse()
            visitedArray.push([...route, ...reversedArray])
            //Check the walls on the last element in that route
            let plausibleChoices = openWalls(grid[route[0]][route[1]])
            //Store a duplicate of that route
            let copyOfRoute = route.slice()
            //Loop through all of the open walls coordinates and append the previous route plus these coordinates for each one whilst checking if these new coordinates are the center
            let exit = false
            plausibleChoices.forEach(choice => {
                checkRoutes.push([...route, choice])
                if (choice[0] == 9 && choice[1] == 9) {
                    exit = true
                }
            })
            if (exit) {
                return
            }
            //Delete the original root from the checkRoutes array
            checkRoutes = checkRoutes.shift()
        })

    }

}

main()
let output = util.inspect(JSON.stringify(visitedArray), { maxStringLength: Infinity });
console.log(output)

