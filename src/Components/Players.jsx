import React from 'react'

const Players = ({symball, isActive, data}) => {
  return (
    <div>
    <div className={`player ${isActive === true ? 'active' : ''} `}>Players {symball}</div>
    <div className='_Flex score'><span>Score : {data}</span></div>
    </div>
  )
}

export default Players