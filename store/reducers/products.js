import {PRODUCTS} from '../../data/dummy-data';

const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(product=> product.uid ==='u1')
}

const productReducer = (state = initialState, action) => {
    return state;   
}

export default productReducer; // implement the redux store in app.js