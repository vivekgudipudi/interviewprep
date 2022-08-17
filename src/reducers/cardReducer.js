
export const counterReducer = (state,action)=>{
    switch(action.type){
        case "INCREMENT_COUNT":
            return{
                ...state,
                counter : action.payload
            }
            default : return state;
    }
}