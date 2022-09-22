import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    country:undefined,
    city:undefined,
 
};

export const SeachContext = createContext(INITIAL_STATE)

const SearchReducer = (state,action) =>{
    switch(action.type){
        case "NEW_SEARCH":
            return action.payload
        case "RESET_SEARCH":
            return INITIAL_STATE
        default:
            return state;
    }
};

export const SearchContextProvider = ({children}) =>{
    const [state,dispatch] = useReducer(SearchReducer, INITIAL_STATE);


return(
    <SeachContext.Provider value={{country:state.country, city:state.city, dispatch}}>
        {children}
    </SeachContext.Provider>
)

}