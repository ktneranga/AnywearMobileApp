import {ADD_TO_CART} from '../actions/cart';
import CartItem from '../../models/cart-item';

const initialState = {
    items: {},
    totalAmount: 0
}

const cartReducer = (state=initialState, action) => {
    switch(action.type){
        case ADD_TO_CART:
            const addedProduct = action.product;
            const prodPrice = addedProduct.price;
            const prodTitle = addedProduct.title;

            if(state.items[addedProduct.pid]){
                //already have the item in the cart
                const updatedCartItem = new CartItem(
                    state.items[addedProduct.pid].quantity+1,
                    prodPrice,
                    prodTitle,
                    state.items[addedProduct.pid].sum+prodPrice
                );
                return {
                    ...state,
                    items:{...state.items, [addedProduct.pid]: updatedCartItem},
                    totalAmount: state.totalAmount + prodPrice
                }
            }else{
                const newCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);
                return {
                    ...state, //copy of the state
                    items: {...state.items, [addedProduct.pid]: newCartItem},
                    totalAmount: state.totalAmount + prodPrice
                }
            }

        default:
            return state
    }
}

export default cartReducer;