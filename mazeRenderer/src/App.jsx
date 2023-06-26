import { useEffect, useState } from 'react'
import Tile from './Tile'
// import { createServer } from "http";
// import { Server } from "socket.io";

import { grid } from "../../grid.mjs"
import { pointer } from "../../pointer.mjs"

function App() {
    let maze=grid
    const [i,setI]=useState(0)
    // const [pointer,setPointer]=useState()
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
    let pos={left:`${52.5*(pointer[i][1]+1)+8}px`,top:`${52.5*(pointer[i][0]+1)+8}px`}
    function something(){
        var intervalId = setInterval(()=>setI((prevI)=>{
            if(prevI<pointer.length-1){
                return prevI+1
            }else{
                clearInterval(intervalId)
                setI(0)
                return prevI
            }
        }),30)
    }

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
                Step
            </button>
            <button className='button button2' onClick={()=>something()}>
                Play
            </button>
            <button className='button button3' onClick={()=>setI(0)}>
                Reset
            </button>
        </>
        
    )
}

export default App
