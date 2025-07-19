import {
    useReducer
} from 'react'
import sumReducer from '../../reducer/sumReducer'
const Sum =()=>{
    const inital={sum:0};
    const [state,dispatch]=useReducer(sumReducer,inital)
    return (
       <>
       <h1>Sum is {state.sum}</h1>
      <button onClick={()=> dispatch({ type:"ADD" })}>+</button>
      <button onClick={()=>dispatch({type:"RES"})}>-</button>
      
       </>
    )
}
export default Sum;