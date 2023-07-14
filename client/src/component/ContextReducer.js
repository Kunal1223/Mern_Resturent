import React, { createContext, useContext, useReducer } from 'react'
// import Home from './screens/Home';
// import Login from './screens/Login';
// import Signup from './screens/Signup';

const cartStateh = createContext();
const cartDispatchh = createContext();

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD':
            return[...state ,{}]
        
        default:
            console.log('Error in Reducer');
    }
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, [])
    return (
        <cartDispatchh.Provider value={dispatch}>
            <cartStateh.Provider value={state}>
                {children}
            </cartStateh.Provider>
        </cartDispatchh.Provider>
    );
};

export const useCart = () => useContext(cartStateh);
export const useDispatch = () => useContext(cartDispatchh);

