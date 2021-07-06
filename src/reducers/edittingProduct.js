import * as types from './../constants/typesAction';

let initialState = {};

let myReducer = (state = initialState, action)=> {
    switch (action.type) {
      case types.GET_PRODUCT_ITEM:
        state = action.product;
        return state;

      default:
        return state;
    }
}

export default myReducer;