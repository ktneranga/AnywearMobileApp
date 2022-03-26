import {PRODUCTS} from '../../data/dummy-data';
import { DELETE_PRODUCT } from '../actions/products';

const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(product=> product.uid ==='u1')
}

const productReducer = (state = initialState, action) => {
    switch(action.type){
        case DELETE_PRODUCT:
            return{
                ...state,
                userProducts: state.userProducts.filter(product=>product.pid !== action.pid)
            }
    }
    return state;   
}

export default productReducer; // implement the redux store in app.js