import { useRef } from "react"

const Example2 = () => {
  const inputRef = useRef(null)
  return (
    <div>
      <p>Accessing DOM Elements </p>
      <input type="text" ref={inputRef} />
      <button onClick={() => inputRef.current?.focus()}>click me</button>
    </div>
  )
}

export default Example2