'use client';

import { createContext, useReducer } from "react";


export const Store = createContext();


const initialState={
    cart:{
        cartItems:[]
    }
}

// Tipos de acciones
const ADD_TO_CART = 'ADD_TO_CART';


function reducer(state, action){

    switch (action.type) {
        case ADD_TO_CART:
            
            const itemExiting = state.cart.cartItems.find(item=> item.id === action.payload.id)

            if (itemExiting){
                const updateCart = state.cartItems(item => item.id === action.payload.id ?
                     {... item, quantity: item.quantity + 1 } : item
            )
            return {
                ...state,
                cartItems: updateCart
            }

            }else{
                return{
                    ...state,
                    cartItems: [ ...state.cart.cartItems, {...action.payload, quantity: +1}]
                }
            }
    
        default:
           return state;
    }

}


export function StoreProvider({children}){
    const [state, dispatch]=useReducer(reducer, initialState)
    const value ={state, dispatch}
    return <Store.Provider value={value}>{children}</Store.Provider> 
}