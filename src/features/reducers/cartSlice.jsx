import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";


const cartSlice = createSlice({
    name: "cart",
    initialState: JSON.parse(localStorage.getItem("marbix__cart")) || [],
    reducers: {
        addToCart: (state, action) => {
            const findShop = state.find(el => el.id === action.payload.id)
            if (findShop) {
                toast.error(`You have picked this product`, {id: "123"}) 
            }
            else {
                action.payload.qty = 1 
                state.push(action.payload)
                toast.success("New product added succesfully", {id: "123"})
                localStorage.setItem("marbix__cart", JSON.stringify(state))
            }
        },
        changeInCart: (state, action) => {
            state.forEach((cart,i) => {
                if(cart.id === action.payload.id){
                state[i].qty = action.payload.qty
                }
            })
            localStorage.setItem("marbix__cart", JSON.stringify(state))
        },
        removeFromCart: (state, action) => {
        state.splice(action.payload, 1)
        toast.success("Product removed from cart", {id: "123"})
        localStorage.setItem("marbix__cart", JSON.stringify(state))
         }
    },
})
export const { addToCart, changeInCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer