
import { addToCart, minusItem, plusItem, removeFromCart } from "../reducer/slices/cartSlice"


export function addToCartHandler(dispatch,item){
    console.log("addoCart")
    dispatch(addToCart(item))
}

export function incrementCountHandler(dispatch,item){
    console.log("Increment Count")
    dispatch(plusItem(item))
}

export function decrementCountHandler(dispatch,item,count){
    console.log("Decrement Count")
        if(count>1){
            dispatch(minusItem(item))
        }else{
            dispatch(removeFromCart(item))
        }
}