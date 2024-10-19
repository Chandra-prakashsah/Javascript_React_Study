import React, { useEffect, useState } from 'react'

const Example1 = () => {
  const [count, setCount] = useState(0)

    useEffect(()=>{
        return()=>{
            console.log("clean up")//clean up it will be run on count change
        }
    },[count])

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  )
}

export default Example1