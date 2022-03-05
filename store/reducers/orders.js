import { ADD_ORDERS } from "../actions/orders";
import Order from "../../models/orders";

const initialState = {
    orders: []
}

const OrdersReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_ORDERS:
            const newOrder = new Order(new Date().toString(), action.orderData.items, action.orderData.amount, new Date());
            return {
                ...state,
                orders: [...state.orders, newOrder]
            }
        default:
            return state
    }
}

export default OrdersReducer;