import React, { useState } from 'react'
// this is call Two way binding
const Compo1 = ({data}) => {
    const [username, setuserName] =useState(data)
  return (
    <div>
        Compo1
        <input value={username} onChange={(e)=> setuserName(e.target.value)}/>
        <div>
        </div>
    </div>
  )
}

export default Compo1