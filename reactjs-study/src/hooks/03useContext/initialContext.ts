import { createContext } from "react";

 const InitialContext = createContext({name:"chandra",count:0,setCount:(_num: number)=>{}});

 export default InitialContext