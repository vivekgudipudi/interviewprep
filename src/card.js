import { useReducer } from "react";
import { counterReducer } from "./reducers/cardReducer"


export function Card ({data}){

    const [state,dispath] = useReducer(counterReducer,
        {
          counter : 0
        })

// console.log(state)
    const clickHandler = ()=>{
        dispath({type : "INCREMENT_COUNT", payload : state.counter + 1})
        
    }

    return(

    <div className="card" key={data.name}>
          Box : {data.name}
          <div className="counter">
            {state.counter}
          </div>
          <button className="add-btn" onClick = {clickHandler} >
            ADD
          </button>
    </div>
    
    )
}