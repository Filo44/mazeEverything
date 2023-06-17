import { useEffect, useState } from 'react'
import Tile from './Tile'
// import { createServer } from "http";
// import { Server } from "socket.io";

import { grid } from "C:/Users/Filippo/Downloads/SCIENCE/grid.mjs"

function App() {
    let maze=grid
    const [i,setI]=useState(0)
    const [pointer,setPointer]=useState([
        [ 0, 0 ],  [ 1, 0 ],  [ 1, 1 ],  [ 1, 2 ],  [ 2, 2 ],  [ 2, 3 ],
        [ 2, 4 ],  [ 3, 4 ],  [ 3, 5 ],  [ 4, 5 ],  [ 4, 4 ],  [ 4, 3 ],
        [ 5, 3 ],  [ 6, 3 ],  [ 7, 3 ],  [ 8, 3 ],  [ 9, 3 ],  [ 9, 4 ],
        [ 10, 4 ], [ 10, 3 ], [ 10, 4 ], [ 9, 4 ],  [ 9, 3 ],  [ 8, 3 ],
        [ 7, 3 ],  [ 6, 3 ],  [ 5, 3 ],  [ 4, 3 ],  [ 4, 4 ],  [ 4, 5 ],
        [ 3, 5 ],  [ 2, 5 ],  [ 3, 5 ],  [ 3, 4 ],  [ 3, 3 ],  [ 3, 2 ],
        [ 4, 2 ],  [ 3, 2 ],  [ 3, 3 ],  [ 3, 4 ],  [ 2, 4 ],  [ 2, 3 ],
        [ 2, 2 ],  [ 1, 2 ],  [ 0, 2 ],  [ 0, 3 ],  [ 0, 4 ],  [ 0, 5 ],
        [ 0, 6 ],  [ 0, 7 ],  [ 0, 8 ],  [ 1, 8 ],  [ 1, 9 ],  [ 1, 10 ],
        [ 2, 10 ], [ 2, 11 ], [ 1, 11 ], [ 0, 11 ], [ 0, 12 ], [ 0, 13 ],
        [ 0, 14 ], [ 0, 13 ], [ 0, 12 ], [ 1, 12 ], [ 1, 13 ], [ 1, 12 ],
        [ 2, 12 ], [ 2, 13 ], [ 2, 14 ], [ 2, 15 ], [ 3, 15 ], [ 3, 16 ],
        [ 4, 16 ], [ 5, 16 ], [ 5, 17 ], [ 5, 18 ], [ 5, 19 ], [ 6, 19 ],
        [ 5, 19 ], [ 4, 19 ], [ 3, 19 ], [ 3, 18 ], [ 3, 19 ], [ 2, 19 ],
        [ 3, 19 ], [ 4, 19 ], [ 5, 19 ], [ 5, 18 ], [ 6, 18 ], [ 7, 18 ],
        [ 8, 18 ], [ 8, 19 ], [ 9, 19 ], [ 8, 19 ], [ 7, 19 ], [ 8, 19 ],
        [ 8, 18 ], [ 9, 18 ], [ 9, 17 ]
      ])
    const newMaze = maze.flatMap((row) => row.map((obj) => obj));
    let m=0;
    let hr=Array.from({ length: 20 }, (_, i) => i)
    const mazeElements=newMaze.map((tile)=>{
        // console.log(tile)
        let classes=[]
        Object.keys(tile).forEach(key=>{
            if(key!="num" && key!="v" && tile[key]==true){
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
    const hElements=hr.map((n)=>{
        return <div>{n}</div>
    })
    let pos={left:`${51.5*(pointer[i][1]+1)+8}px`,top:`${51.9*(pointer[i][0]+1)+8}px`}

    return (
        <>  
            <div className='pointer' style={pos}>
                {">"}
            </div>
            <div className="header">
                {hElements}
            </div>
            <div className="headerv">
                {hElements}
            </div>
            <div className='grid'>
                {mazeElements}
            </div>
            <button className='button' onClick={()=>setI(i+1)}>
                Hi!
            </button>
        </>
        
    )
}

export default App
