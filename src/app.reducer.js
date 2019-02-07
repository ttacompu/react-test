export const todos = (states = [], action)=>{
    switch(action.type){
        case "ADD_TODO":
            return [...states, { id : action.payload.id, text : action.payload.text}]
            case "REMOVE_TODO":
                return states.filter(item => item.id !== action.payload )
        default : 
            return states;
    }
}