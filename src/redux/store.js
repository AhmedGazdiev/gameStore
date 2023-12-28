import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cartSlice";
import gameSlice from "./game/gameSlice";

export const store = configureStore({
   reducer: {
      cart: cartSlice,
      games: gameSlice
   }
})