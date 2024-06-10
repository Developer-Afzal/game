import React from 'react'
import Win from '../assets/win.mp3'
const WonScreen = ({closemodel, datavalue}) => {
  if(datavalue === "No"){
    const play_audio  = new Audio(Win)
          play_audio.play()
  }
  return (
   <div className='wonscreen-Block _Flex'>
        <h1>
        &#128512; {datavalue === "No" ? `Match Draw!` : `Player ${datavalue} Won!` }
        </h1>
        <div>
        <button onClick={closemodel}>Rematch</button>
        </div>
   </div>
  )
}

export default WonScreen