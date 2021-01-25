import { createSlice, configureStore } from "@reduxjs/toolkit"
import { ProductItem } from "../types"
import { INITIAL_STATE } from "./state"

const basketSlice = createSlice({
  name: "basket",
  initialState: INITIAL_STATE,
  reducers: {
    addProduct: (state, action) => {
      return state.map((item: ProductItem) => {
        if ((item.id === action.payload.id)) {

          return {
            ...item,
            added: true,
            quantity: item.quantity === undefined ? 1 : item.quantity + 1,
            itemsLeft: item.itemsLeft - 1,
          }
        }

        return item
        
      })
    },
    removeProduct: (state, action) => {
      return state.map((item: ProductItem) => {

        if (item.id === action.payload.id) {
          let elem = INITIAL_STATE.find((p: ProductItem) => p.id === action.payload.id);
          return {
            ...item,
            added: false,
            itemsLeft: elem.itemsLeft,
            quantity: 0
          }
        }

        return item
      })
    }
  }
})

const store = configureStore({ reducer: basketSlice.reducer })

export const { addProduct, removeProduct } = basketSlice.actions

export { basketSlice, store }
