import { useState } from 'react'
import Child from './child'

const Parents = () => {
    const [count,setCount]=useState(0)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
        <Child name={"chandra"}/>
    </div>
  )
}

export default Parents