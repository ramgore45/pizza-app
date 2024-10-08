import { combineReducers } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import authReducer from './slices/authSlice'

const rootReducer = combineReducers({
    cart: cartReducer,
    auth: authReducer,
})

export default rootReducer