import {combineReducers} from 'redux';
import products from './products';
import edittingProduct from './edittingProduct';

let myReducer = combineReducers({
    products,
    edittingProduct
});

export default myReducer;