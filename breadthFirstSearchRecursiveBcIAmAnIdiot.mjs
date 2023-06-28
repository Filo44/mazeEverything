//WTF it is not running it
import { grid } from "./grid.mjs"
import util from "util"
var visitedArray = [[0, 0]]
var secondRoute = []
let finished = false

function openWalls(grid, i, j) {
    console.log(`i:${i},j:${j}`)
    let cell = grid[i][j]
    console.log(cell)
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
                    if (j > 0 && grid[i][j - 1].v == true) {
                        plausibleChoices.push([i, j - 1])
                        // console.log("left")
                    }
                    break
                case "right":
                    if (j < grid[i].length && grid[i][j + 1].v == true) {
                        plausibleChoices.push([i, j + 1])
                        // console.log("right")
                    }
                    break
                case "top":
                    if (i > 0 && grid[i - 1][j].v == true) {
                        plausibleChoices.push([i - 1, j])
                        // console.log("top")
                    }
                    break
                case "bottom":
                    if (i < grid.length && grid[i + 1][j].v == true) {
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
    grid[0][0].v = false
    let firstCoords = openWalls(grid, 0, 0)
    // console.log(firstCoords)
    let checkRoutes = firstCoords.map(singleCoords => {
        return [singleCoords]
    })
    // console.log("checkRoutes:", checkRoutes)
    // console.log(checkRoutes)
    //While true loop
    while (true) {
        //Reverse the array checkroutes so it looks more efficient, also keep track if it is the last element and if so and it has multiple choices don't add the reverse
        //For now just check if there is only one don't add the reverse
        // console.log("checkRoutes:", checkRoutes)
        // console.log("outside")
        let first = true
        if (checkRoutes.length == 0) {
            break
        }
        checkRoutes = fix(checkRoutes)
        checkRoutes.forEach((route) => {
            // console.log("inside")
            //For each route append it to the visitedArray, then the reverse
            let reversedArray = route.slice()
            reversedArray.reverse()
            reversedArray.shift()
            visitedArray.push(...route)
            // console.log("route:", ...route)
            if (!first) {
                // console.log("reversedArray:", ...reversedArray)
                visitedArray.push(...reversedArray)
            } else {
                first = false
            }

            // console.log(visitedArray)
            // console.log("visitedArray: ", visitedArray)
            //Check the walls on the last element in that route
            let tempI = route[route.length - 1][0]
            let tempJ = route[route.length - 1][1]
            grid[tempI][tempJ].v = false
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
        // console.log("checkRoutes:", checkRoutes)
        console.log("visitedArray:", visitedArray)
        console.log("iteration done")
    }
}

function fix(routes) {
    //Loop through them and check in pairs if they have 
    routes = structuredClone(routes)
    for (let i = 0; i < routes.length - 1; i++) {
        //Go through each route until the values of both arrays in the same place in the index don't match
        //Go through the first one backwards
        //While they do match remove the same ones 
        let route1 = routes[i]
        let route2 = routes[i + 1]
        for (let j = 0; j < Math.min(route1.length, route2.length); j++) {
            console.log("route1[route1.length - 1 - j]: ", route1[route1.length - 1 - j])
            console.log("route2[j]: ", route2[j])
            if (route1[route1.length - 1 - j] == route2[j]) {
                route1.splice(route1.length - 1 - j, 1)
                route1.splice(j, 1)
            } else {
                break
            }
        }
    }
    return routes
}
main()
console.log("Finished")
// console.log(openWalls(grid, 7, 6))
let output = util.inspect(JSON.stringify(visitedArray), { maxStringLength: Infinity });
console.log(output)