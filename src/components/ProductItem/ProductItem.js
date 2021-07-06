import { Component } from "react";
import {Link } from 'react-router-dom';
class ProductItem extends Component {

  deleteProduct = (id, name)=> {
    if(window.confirm(`Are you sure you want to delete "${name} ?"`)) {
      this.props.onDeleteProduct(id);
    }
  };

  render() {
    let {product, index} = this.props;
    let productStatus = product.status ? 'Còn hàng': 'Hết hàng';
    let productClass = product.status ? 'default' : 'warning';
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}$</td>
        <td>
          <label className={`panel panel-${productClass}`}>
            {productStatus}
          </label>
        </td>
        <td>
          <Link to={`product/${product.id}/edit`} className="btn btn-success mr-10">
            Sửa
          </Link>
          <button
            className="btn btn-danger"
            type="button"
            onClick={() => this.deleteProduct(product.id, product.name)}
          >
            Xóa
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;
