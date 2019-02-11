export const todos = (states = [], action)=>{
    switch(action.type){
        case "ADD_TODO":
            return [...states, { id : action.payload.id, text : action.payload.text, isChecked  : false}]
        case "REMOVE_TODO":
                return states.filter(item => item.id !== action.payload )
        case "TOGGLE_TODO":
            return states.map(item =>{
                if(item.id === action.payload){
                    return {...item, isChecked : !item.isChecked }
                }
                return item;
            })
            
        default : 
            return states;
    }
}

export const currentFilter= (state = "All", action)=>{
        if(action.type === "FILTER_TODO"){
            state = action.payload;
        }
        
        return state;
}