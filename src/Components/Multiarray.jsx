import React from 'react'
import { useState } from 'react'
const Multiarray = () => {
    const userdata =[
        [1,3,4],
        [23,4,45],
        [233,23,43],
      ]
      const [list, setlist] =useState(userdata)
  return (
    <div>
        <div>
          {list.map(itm=>(
            <div>
              {itm.map(item=>(
                <span>
                  {item}
                </span>
              ))}  
            </div>
          ))}
        </div>
    </div>
  )
}

export default Multiarray