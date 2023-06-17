import { useEffect, useState } from 'react'
import Tile from './Tile'
// import { createServer } from "http";
// import { Server } from "socket.io";

//import maze from "./maze"

function App() {
    const [i,setI]=useState(0)
    const [maze,setMaze]=useState([
        [
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: true, num: 0, v: true },
            { top: false, right: false, bottom: false, left: true, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: true, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true }
        ],
        [
            { top: true, right: false, bottom: false, left: false, num: 0, v: true },
            { top: true, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: true, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: true, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true }
        ],
        [
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: true, right: false, bottom: true, left: true, num: 0, v: true },
            { top: true, right: false, bottom: false, left: false, num: 0, v: true },
            { top: true, right: false, bottom: true, left: false, num: 0, v: true },
            { top: true, right: true, bottom: true, left: false, num: 0, v: true },
            { top: true, right: false, bottom: true, left: true, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: true, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: true, num: 0, v: true },
            { top: false, right: true, bottom: false, left: true, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true }
        ],
        [
            { top: true, right: false, bottom: false, left: false, num: 0, v: true },
            { top: true, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: true, right: true, bottom: false, left: true, num: 0, v: true },
            { top: true, right: false, bottom: true, left: true, num: 0, v: true },
            { top: true, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: true, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: true, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true }
        ],
        [
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: true, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: true, right: false, bottom: false, left: false, num: 0, v: true },
            { top: true, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: true, right: false, bottom: false, left: true, num: 0, v: true },
            { top: true, right: true, bottom: true, left: false, num: 0, v: true },
            { top: true, right: false, bottom: false, left: true, num: 0, v: true },
            { top: true, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: true, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true }
        ],
        [
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: true, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: true, num: 0, v: true },
            { top: true, right: false, bottom: true, left: false, num: 0, v: true },
            { top: true, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: true, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: true, right: true, bottom: false, left: true, num: 0, v: true },
            { top: true, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true }
        ],
        [
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: true, right: true, bottom: false, left: false, num: 0, v: true },
            { top: true, right: true, bottom: false, left: false, num: 0, v: true },
            { top: true, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: true, right: false, bottom: false, left: true, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: true, right: false, bottom: true, left: true, num: 0, v: true },
            { top: true, right: false, bottom: true, left: false, num: 0, v: true },
            { top: true, right: false, bottom: true, left: false, num: 0, v: true },
            { top: true, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true }
        ],
        [
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: true, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: true, num: 0, v: true },
            { top: true, right: false, bottom: true, left: true, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true }
        ],
        [
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: true, right: false, bottom: false, left: false, num: 0, v: true },
            { top: true, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true }
        ],
        [
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true }
        ],
        [
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true }
        ],
        [
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true }
        ],
        [
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true }
        ],
        [
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true }
        ],
        [
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true }
        ],
        [
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true }
        ],
        [
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true }
        ],
        [
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true }
        ],
        [
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: true, left: false, num: 0, v: true },
            { top: false, right: true, bottom: true, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true }
        ],
        [
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: true, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: true },
            { top: false, right: false, bottom: false, left: false, num: 0, v: false }
        ]
    ]
    )
    useEffect(()=>{     
        // const httpServer = createServer();
        // const io = new Server(httpServer, {
        //     // ...
        // });
        // io.on("connection", (socket) => {
        //     console.log("It worked!")
        //     socket.on("update",(grid)=>{
        //         console.log("Updated grid")
        //         setMaze(grid)
        //     })
        // });
        // httpServer.listen(3000);
    },[])
    
    const newMaze = maze.flatMap((row) => row.map((obj) => obj));

    useEffect(()=>{
        setInterval(()=>{
            setI(prevI=>prevI+1)
            console.log("WTF")
            console.log(i)
        },1000)
    },[])
    let m=0;
    const mazeElements=newMaze.map((tile)=>{
        // console.log(tile)
        let classes=[]
        Object.keys(tile).forEach(key=>{
            if(key!="num" && tile[key]==true){
                classes.push(key)
            }
        })
        if(m==189){
            classes.push("center")
        }
        m++
        return (
            <div className={`tile ${classes.join(' ')}`}> {tile.num}</div>
        )
    })

    return (
        <div className='grid'>
            {mazeElements}
        </div>
    )
}

export default App
