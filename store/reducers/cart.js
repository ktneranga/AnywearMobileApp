import {ADD_TO_CART} from '../actions/cart';
import { REMOVE_FROM_CART } from '../actions/cart'; 
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

        case REMOVE_FROM_CART:
            const currentQty = state.items[action.pid].quantity;
            const selectedItem = state.items[action.pid];
            if(currentQty > 1){
                //need to reduce it, not to erase it
                const updatedCartItem = new CartItem(selectedItem.quantity-1, selectedItem.productPrice, selectedItem.productTitle, selectedItem.sum-selectedItem.productPrice);
                return{
                    ...state,
                    items: {...state.items, [action.pid]: updatedCartItem},
                    totalAmount: state.totalAmount - selectedItem.productPrice
                }
            }else{
                const updatedCartItems = {...state.items};
                delete updatedCartItems[action.pid];

                return{
                    ...state,
                    items: updatedCartItems,
                    totalAmount: state.totalAmount - selectedItem.productPrice
                }
            }

        default:
            return state
    }
}

export default cartReducer;