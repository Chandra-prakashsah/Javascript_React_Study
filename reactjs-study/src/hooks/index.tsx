import HookuseState from "./01useState"
import HookuseEffect from "./02useEffect"
import UseContextHook from "./03useContext"
import UseRefHook from "./04useRef"
import UseReducer from "./05useReducer"

const Hooks = () => {
  return (
    <div>
      <HookuseState />
      <HookuseEffect />
      <UseContextHook />
      <UseRefHook />
      <UseReducer/>
    </div>
  )
}

export default Hooks