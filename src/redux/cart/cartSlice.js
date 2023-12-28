import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
   name: 'cart',
   initialState: { itemsInCart: [] },
   reducers: {
      setItemInCart: (state, action) => {
         state.itemsInCart.push(action.payload)
      },
      deleteItemFromCard: (state, action) => {
         state.itemsInCart = state.itemsInCart.filter(game => game.id !== action.payload)
      }
   }
})

export const { setItemInCart, deleteItemFromCard } = cartSlice.actions
export default cartSlice.reducer