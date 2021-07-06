import { Component } from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';
import Products from "./../../components/Products/Products";
import ProductItem from "./../../components/ProductItem/ProductItem";
import * as actionsType from './../../actions/index';
class ProductListPage extends Component {

  onDeleteProduct = (id) => {
    this.props.onDeleteProduct(id);
  };

  componentDidMount() {
    this.props.fetchProductsAPI();
    console.log('ahihi');
  }

  render() {
    let { products } = this.props;
    return (
      <div className="container">
        <div className="App">
          <div className="container mt-10">
            <Link to="/product/add" className="btn btn-primary">
              Add Product
            </Link>
            <div>
              <h3 className="mt-10">Danh sách sản phẩm</h3>
              <Products>{this.showProducts(products)}</Products>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  showProducts = (products) => {
    let result = [];
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            index={index}
            product={product}
            onDeleteProduct={this.onDeleteProduct}
          />
        );
      });
    }
    return result;
  };
}

let mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

let mapDispatchToProps = (dispatch) =>{
  return {
    fetchProductsAPI: () => {
      dispatch(actionsType.fetchProductsAPI());
    },
    // fetchProducts: (data) => {
    //   dispatch(actionsType.fetchProducts(data));
    // },
    onDeleteProduct: (id) => {
      dispatch(actionsType.deleteProductAPI(id));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
