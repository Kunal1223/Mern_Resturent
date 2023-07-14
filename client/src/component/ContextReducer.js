import React, { createContext, useContext, useReducer } from 'react'
// import Home from './screens/Home';
// import Login from './screens/Login';
// import Signup from './screens/Signup';

const cartStateh = createContext();
const cartDispatchh = createContext();

const reducer = (state, action) => {
    switch(action.type){
        case 'ADD':
            return[...state ,{id:action.id ,name : action.name , qty:action.qty ,size :action.size , price: action.price , img : action.img}]
        
        case 'REMOVE':
             let newArr = [...state]
             newArr.splice(action.index , 1)
             return newArr;

        case "UPDATE":
                let arr = [...state]
                arr.find((food, index) => {
                    if (food.id === action.id) {
                        console.log(food.qty, parseInt(action.qty), action.price + food.price)
                        arr[index] = { ...food, qty: parseInt(action.qty) + food.qty, price: action.price + food.price }
                    }
                    return arr
                })
                return arr
                
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

