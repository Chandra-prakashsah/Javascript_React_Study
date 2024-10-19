import { useContext } from "react"
import InitialContext from "./initialContext"

const Component3 = () => {
    const useData=useContext(InitialContext);
    const {name,count,setCount}=useData;
    return (
      <div>
        <h1>{name}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    )
  }
  
  export default Component3