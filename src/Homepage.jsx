
import React, { useEffect, useState } from 'react'
import './App.css';
import Players from './Components/Players';
import WonScreen from './Components/WonScreen';
const Homepage = () => {
  const [value, setvalue] = useState('X');
  const [gameValue, setgameValue] = useState([[null,null,null],[null,null,null],[null,null,null]])
  const [score, setscore] = useState({playerX:0,playerO:0,})
  const [playerX, setplayerX] = useState([])
  const [count, setcount] = useState(0);
  const [showWonscreen, setshowWonscreen] = useState(false)
  useEffect(()=>{
   const setID =  setTimeout(()=>{
      if(gameValue[0][0] == 'X' && gameValue[0][1] == 'X' && gameValue[0][2] == 'X' || gameValue[0][0] == 'X' && gameValue[1][0] == 'X' && gameValue[2][0] == 'X'){
        setshowWonscreen(true)
        Scorehandle(score.playerX + 1)
      }
      if(gameValue[1][0] == 'X' && gameValue[1][1] == 'X' && gameValue[1][2] == 'X' || gameValue[0][1] == 'X' && gameValue[1][1] == 'X' && gameValue[2][1] == 'X'){
        setshowWonscreen(true)
        Scorehandle(score.playerX + 1)
      }
      if(gameValue[2][0] == 'X' && gameValue[2][1] == 'X' && gameValue[2][2] == 'X' || gameValue[0][2] == 'X' && gameValue[1][2] == 'X' && gameValue[2][2] == 'X'){
        setshowWonscreen(true)
        Scorehandle(score.playerX + 1)
      }
      if(gameValue[0][0] == 'O' && gameValue[0][1] == 'O' && gameValue[0][2] == 'O' || gameValue[0][0] == 'O' && gameValue[1][0] == 'O' && gameValue[2][0] == 'O'){
        setshowWonscreen(true)
        Scorehandle(score.playerO + 1)
      }
      if(gameValue[1][0] == 'O' && gameValue[1][1] == 'O' && gameValue[1][2] == 'O' || gameValue[0][1] =='O' && gameValue[1][1] == 'O' && gameValue[2][1] == 'O'){
        setshowWonscreen(true)
        Scorehandle(score.playerO + 1)
      }
      if(gameValue[2][0] == 'O' && gameValue[2][1] == 'O' && gameValue[2][2] == 'O' || gameValue[0][2] == 'O' && gameValue[1][2] == 'O' && gameValue[2][2] == 'O'){
        setshowWonscreen(true)
        Scorehandle(score.playerO + 1)
      }
      if(gameValue[0][0] == 'O' && gameValue[1][1] == 'O' && gameValue[2][2] == 'O' || gameValue[0][2] == 'O' && gameValue[1][1] == 'O' && gameValue[2][0] == 'O'){
        setshowWonscreen(true)
        Scorehandle(score.playerO + 1)
      }
      if(gameValue[0][0] == 'X' && gameValue[1][1] == 'X' && gameValue[2][2] == 'X' || gameValue[0][2] == 'X' && gameValue[1][1] == 'X' && gameValue[2][0] == 'X'){
        setshowWonscreen(true)
        Scorehandle(score.playerX + 1)
      } 
    }, 200)
    return()=>{
      clearTimeout(setID)
    }
  },[value])

  const valuehandle =(rowindex, colindex)=>{
    setcount(prev=> prev+1)
    // if(value === 'X'){
    //   setplayerX((state)=> [...state, (colindex)])
    //   setXcount(Xcount => Xcount+1)
    // }
    if(gameValue[rowindex][colindex] === null){
    setgameValue(prev =>{
      const itemValue = [...prev.map(innerArray=> [...innerArray])];
      itemValue[rowindex][colindex] = value === "O" ? 'O' : "X";
      setvalue(value === "O" ? 'X' : "O")
      return itemValue;
    })
  }else{
    return alert('pls enter select emapty box')
  }
  }

  const Scorehandle =(player)=>{
    value === 'O' ? setscore(prev=>{
      return {
        ...prev,
        playerX:player
      }
    }) :setscore(prev=>{
      return {
        ...prev,
        playerO:player
      }
    })

  }

const modelhandle =()=>{
  setcount(0)
  setshowWonscreen(false)
  setgameValue([[null,null,null],[null,null,null],[null,null,null]])
} 
  return (
    <div className='container _Flex'>
      <div className='_Flex'>
      <Players symball={'X'} isActive={value === 'X'} data={score.playerX}/>
      <Players symball={'O'} isActive={value === 'O'} data={score.playerO}/>
      </div>
      {gameValue.map((itm, rowindex) => (
        <div className='OuterBox _Flex'>
          {itm.map((item, colindex) => 
          <div>
            <button className='innerBox' onClick={()=>valuehandle(rowindex, colindex)}>{item}</button>
          </div>
          )}
        </div>
       ) )}
       {showWonscreen === true ? <WonScreen closemodel={modelhandle} datavalue ={value == 'X' ? "O" : "X" }/> : null}
       {count === 9 && !showWonscreen ? <WonScreen closemodel={modelhandle} datavalue ={'No'}/> : null}
    </div>
  )
}

export default Homepage
