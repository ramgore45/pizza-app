import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart:localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
    totalCount:localStorage.getItem("totalCount")
    ? JSON.parse(localStorage.getItem("totalCount"))
    : 0,
    totalAmount:localStorage.getItem("totalAmount")
    ? JSON.parse(localStorage.getItem("totalAmount"))
    : 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload
      const pizza = {...item, count:1 }
      state.totalCount++
      state.totalAmount += pizza.price
      console.log(pizza)
      state.cart.push(pizza)
    },
    plusItem(state, action) {
      const item = action.payload
      state.cart.map((pizza)=>(
        pizza.id===item.id ? ( 
          console.log(pizza.count++),
          {...pizza, count:pizza.count+1} ,
          state.totalCount ++,
          state.totalAmount += pizza.price
        ) : item
      ))
    },
    minusItem(state, action) {
      const item = action.payload
      state.cart.map((pizza)=>(
        pizza.id===item.id ? ( 
          console.log(pizza.count--),
            {...pizza, count:pizza.count-1} ,
            state.totalCount--,
            state.totalAmount -= pizza.price*1
        ) : item
      ))
    },
    removeFromCart(state, action) {
      const item = action.payload
      const index = state.cart.findIndex((pizza)=>pizza.id === item.id)
      if(index>=0){
        const pizza =state.cart[index]
        state.totalCount -= pizza.count
        state.totalAmount -= pizza.price*pizza.count
        state.cart.splice(index,1)
      }
    },
    emptyCart(state) {
        state.totalCount=0
        state.totalAmount=0
        state.cart=[]
    },
  },
})

export const { addToCart, plusItem, minusItem, removeFromCart, emptyCart } = cartSlice.actions
export default cartSlice.reducer