import React, {useState} from 'react'
import "./Puzzle.css"


const Puzzle = ({size}) =>  {
    const howBig = size
  
    //create first table of tiles
    const drawBoard =() =>{
      let temp_board = []
      let number = 1;
  
      for(let i =1; i<=howBig;i++){
        for(let j = 1; j <= howBig;j++){
          let isEmpty = false
  
          if(number === howBig*howBig){
            isEmpty = true
          }
  
          const tile = {
            x:(j*100)-100,
            y:(i*100)-100,
            number:number,
            key:number,
            isEmpty:isEmpty,
            yp:(i*100)-100,
            xp:(j*100)-100}
  
          temp_board.push(tile)
          number++;
        }
  
      }
      return temp_board
    }
  
  
    const [board,setBoard] = useState(drawBoard)
    const [empty,setEmpty] =useState((howBig*howBig)-1)
  
  
  
    //checking if tile is in the same row/column as empty
    const checked = (n) =>{
      let row =0;
      let column =0;
      let col;
      let ro;
      let number = 1;
      for(let i=1; i <= howBig;i++){
        for(let j = 1; j <= howBig; j++){
          if(board[number-1].number === n){
            row = j;
            column = i;
          }
          if(number === empty+1){
            col = i;
            ro = j;
            }
            number++;
        }
        }
        if(((ro === row) && (col+1 === column))
          ||((ro === row) && (col-1 === column))
          || ((ro+1 === row) && (col === column))
          ||((ro-1 === row) && (col === column))  )return true
        console.log("XD")
        return false
      }
  
  
    //switching tiles
    const handleTileClick =(n) => {
      if(checked(n)===false)return
      const t = board[n-1]
      const e = board[empty]
  
      let boardy = []
  
      board.forEach(tile => {
  
        if(tile.number === n){
          let ti = {
            x:t.x,
            y:t.y,
            number:tile.number,
            key:tile.number,
            isEmpty:true,
            yp:t.yp,
            xp:t.xp}
            boardy.push(ti)
          console.log(ti)
          }
        else if(tile.number === empty+1){
          let ti = {
            x:e.x,
            y:e.y,
            number:tile.number,
            key:tile.number,
            isEmpty:false,
            yp:t.yp,
            xp:t.xp}
            boardy.push(ti)
            console.log(ti)
        }
        else{
          let ti = {
            x:tile.x,
            y:tile.y,
            number:tile.number,
            key:tile.number,
            isEmpty:false,
            yp:tile.yp,
            xp:tile.xp}
          boardy.push(ti)
        }
  
      })
  
  
      setEmpty(n-1)
      setBoard(boardy)
    }
  
      //drawing a game board
    const draw=(n,tile)=>{
        const STYLES = {
          top :`${board[n-1].y}px`,
          left:`${board[n-1].x}px`,
          backgroundPositionX:`${howBig*100-board[n-1].xp}px`,
          backgroundPositionY:`${howBig*100-board[n-1].yp}px`
        }
      
         return(
          
          <div className={`tile ${board[n-1].isEmpty?'empty':"none"}`} 
          style={STYLES} 
          onClick={() => handleTileClick(n)} 
          key={board[n-1].key}>
          </div>
          )
      }
  
      const STYLES = {
        width:`${howBig*100}px`,
        height:`${howBig*100}px`,
      }
  
      return (
        <div className="tiles-container" style = {STYLES}>
         {board.map(tile=>(
              draw(tile.number,tile)
          ))}
        </div>
      )
    }

export default Puzzle