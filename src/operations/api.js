const URL = process.env.REACT_APP_BASE_URL 

export const authEndpoints = {
    SIGNUP_URL : `${URL}/auth/signup`,
    LOGIN_URL : `${URL}/auth/login`,
}

export const pizzaEndpoints = {
    GET_PIZZA_URL:`${URL}/pizzas/getallpizzas`
}

export const ordersEndPoints = {
    GET_ALL_ORDERS_URL:`${URL}/order/getallorders`,
    GET_MY_ORDERS_URL:`${URL}/order/getmyorders`,
    BUY_PIZZA_URL:`${URL}/order/buypizza`,
    UPDATE_ORDER_STATUS_URL:`${URL}/order/updateorderstatus`,
    GET_SINGLE_ORDERDETAILES_URL:`${URL}/order/getsingleorder`
}