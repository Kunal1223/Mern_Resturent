import React, { createContext, useContext, useReducer } from 'react'
// import Home from './screens/Home';
// import Login from './screens/Login';
// import Signup from './screens/Signup';

const cartStateContext = createContext();
const cartDisptchContext = createContext();

const reducer = (state, action) => {

}

export const CartProvider = ({ childeren }) => {
    const [state, dispatch] = useReducer(reducer, [])
    return (
        <cartDisptchContext.Provider value={dispatch}>
            <cartStateContext.Provider value={state}>
                {childeren}
            </cartStateContext.Provider>
        </cartDisptchContext.Provider>
    );
};

export const useCart = () => useContext(cartStateContext);
export const useDispatch = () => useContext(cartDisptchContext);

