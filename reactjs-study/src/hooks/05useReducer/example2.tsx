
import React, { useReducer } from 'react'


const initialState = {
    name: '',
    email: '',
    password: ''
}

const reducer=(state,action)=>{
    switch(action.type){
        case "name":
            return { ...state, name: action.value }
        case "email":
            return { ...state, email: action.value }
        case "password":
            return { ...state, password: action.value }
        default:
            return state
    }
}
const Example2 = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state)
    const onChange = (e) => {
        dispatch({ type: e.target.name, value: e.target.value });
    }
    return (
        <div>
            <input type="text" name='name' value={state.name} onChange={onChange} />
            <input type="email" name='email' value={state.email} onChange={onChange} />
            <input type="password" name='password' value={state.password} onChange={onChange} />
        </div>
    )
}

export default Example2