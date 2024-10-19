import React ,{useState} from 'react'

const HookuseState = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
      <h2>useState hook</h2>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>reset</button>
    </div>
  )
}

export default HookuseState