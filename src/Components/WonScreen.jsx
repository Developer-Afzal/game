import React from 'react'

const WonScreen = ({closemodel, datavalue}) => {
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