import { useReducer } from "react"


const initialState = {
    count: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 }
        case "decrement":
            return { count: state.count - 1 }
        case "reset":
            return initialState
        default:
            return 0
    }
}
const Example1 = () => {

    const [state, dispatch] = useReducer(reducer, initialState);


    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
            <button onClick={() => dispatch({ type: "reset" })}>reset</button>
        </div>
    )
}

export default Example1