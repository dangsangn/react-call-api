import callAPI from "./../utils/callAPI";
import * as types from "./../constants/typesAction";

export const fetchProductsAPI = () => {
  return async (dispatch) => {
    const response = await callAPI("products", "GET", null);
    dispatch(fetchProducts(response.data));
  };
};

export const fetchProducts = (products) => {
  return {
    type: types.FETCH_PRODUCTS,
    products,
  };
};

export const deleteProductAPI = (id) => {
  return async (dispatch) => {
    await callAPI(`products/${id}`, "DELETE", null);
    dispatch(deleteProduct(id));
  };
};

export const deleteProduct = (id) => {
  return {
    type: types.DELETE_PRODUCT,
    id,
  };
};

export const addProductAPI = (product) => {
  return async (dispatch) => {
    await callAPI("products", "POST", product);
    dispatch(addProduct(product));
  };
};

export const addProduct = (product) => {
  return {
    type: types.ADD_PRODUCT,
    product,
  };
};

export const updateProductAPI = (id, product) => {
  return async (dispatch) => {
    await callAPI(`products/${id}`, "PUT", {
      name: product.name,
      price: product.price,
      status: product.status,
    });
    dispatch(updateProduct(product));
  };
};

export const updateProduct = (product) => {
  return {
    type: types.UPDATE_PRODUCT,
    product,
  };
};

export const getProductItemAPI = (id) => {
  return async (dispatch) => {
    const response = await callAPI(`products/${id}`, 'GET', null);
    dispatch(getProductItem(response.data));
    }
}

export const getProductItem = (product) => {
  return {
    type: types.GET_PRODUCT_ITEM,
    product,
  };
}