import * as types from './../constants/typesAction';

let initialState = [];
let findIndex = (products, id) => {
  let result = -1;
  if (products.length > 0) {
    products.forEach((product, index) => {
      if (product.id === id) {
        result = index;
      }
    });
  }
  return result;
};

let myReducer = (state = initialState, action)=> {
    let {product, id} = action
    let index = findIndex(state, id);
    switch (action.type) {
        case types.FETCH_PRODUCTS:
            state = action.products;
            return state;

        case types.DELETE_PRODUCT:
            state.splice(index, 1);
            return [...state];
        
        case types.ADD_PRODUCT: 
            state.push(product);
            return [...state];
        
        case types.UPDATE_PRODUCT:
          let indexEdit = findIndex(state, product.id);
          state[indexEdit] = product;
          console.log(state);
          return [...state];

        default : 
            return [...state];
    }
}

export default myReducer;