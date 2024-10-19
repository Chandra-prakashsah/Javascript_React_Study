import React, { useReducer, useState } from 'react'


const initialState = {
    todos: []
}

const reducer=(state,action)=>{
    switch(action.type){
        case "add":
            return {...state,todos:[...state.todos,action.text]}
            

}
}
const Example3 = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [inputValue, setInputValue] = useState('');
  return (
    <div>
        <h1>todo list</h1>
        <input type="text" name="" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={() => dispatch({ type: "add", text: inputValue })}>Add</button>

    </div>
  )
}
export default Example3;