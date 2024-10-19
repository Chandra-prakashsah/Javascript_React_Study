import { useState } from "react"
import Component1 from "./component1"
import InitialContext from "./initialContext"

const UseContextHook = () => {
    const [count,setCount]=useState(0)
  return (
    <InitialContext.Provider value={{name:"chandra",count:count,setCount:setCount}}>
        <h1>useContext hook</h1>
        <h2>{count}</h2>
        <Component1/>
    </InitialContext.Provider>
  )
}

export default UseContextHook