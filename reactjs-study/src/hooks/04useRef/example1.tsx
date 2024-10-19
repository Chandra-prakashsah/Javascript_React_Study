import { useEffect, useRef } from "react"

const Example1 = () => {
  const count=useRef(0);
  console.log("useRef example1 render")
  useEffect(()=>{
    count.current=count.current+1;
  })

  return (
    <div>
        <p>Does Not Cause Re-renders</p>
        <h1>{count.current}</h1>
    </div>
  )
}

export default Example1