import { Component } from "react";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as typesAction from './../../actions/index';

class AddProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      price: 0,
      status: false,
    };
  }

  componentDidMount() {
    let { match } = this.props;
    if (match) {
      this.setState({
        id: match.params.id,
      });
      this.props.getProductItem(match.params.id);
    }
  }

  componentWillReceiveProps(props) {
    console.log(props);
    let { edittingProduct } = props;
    console.log(edittingProduct);
    this.setState({
      name: edittingProduct.name,
      price: edittingProduct.price,
      status: edittingProduct.status,
    });
  }

  onChange = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    let {  id, name, price } = this.state;
    let { history } = this.props;
    if (id) {
      this.props.updateProduct(this.state, id);
    } else if(name !== '' && price !=='' ) {
      this.props.addProduct(this.state);
    } else {
      alert('Bạn chưa mua sản phẩm nào cả :(');
    }
    history.push("/product-list");
    //history.goBack();
  };

  render() {
    let { name, price, status, id } = this.state;
    return (
      <div className="container">
        <div className="col-6">
          <h3 className="mt-10">{id ? "Edit Product" : "Thêm sản phẩm"}</h3>
          <form className="form-group" onSubmit={this.onSubmit}>
            {id ? (
              <div className="form-group">
                <label for="id">
                  <strong>ID </strong>
                </label>
                <input
                  type="text"
                  name="id"
                  onChange={this.onChange}
                  value={id}
                  id="id"
                  className="form-control"
                  placeholder=""
                  aria-describedby="helpId"
                  disabled={id ? true : false}
                />
              </div>
            ) : (
              ""
            )}
            <div className="form-group">
              <label for="name">
                <strong>Tên sản phẩm</strong>
              </label>
              <input
                type="text"
                name="name"
                onChange={this.onChange}
                value={name}
                id="name"
                className="form-control"
                placeholder=""
                aria-describedby="helpId"
              />
            </div>
            <div className="form-group">
              <label for="price">
                <strong>Gía Sản phẩm</strong>
              </label>
              <input
                type="text"
                name="price"
                onChange={this.onChange}
                value={price}
                id="price"
                className="form-control"
                placeholder=""
                aria-describedby="helpId"
              />
            </div>
            <div className="form-group">
              <label for="status">
                <strong>Tình trạng Sản phẩm</strong>
              </label>
              <br></br>
              <input
                type="checkbox"
                id="status"
                name="status"
                onChange={this.onChange}
                checked={status}
              />
              <label for="status" className="ml-10">
                Còn hàng
              </label>
            </div>
            <div className="form-group mt-10">
            <Link to="/product-list" className="btn btn-danger mr-10">Trở lại</Link>
              <button type="submit" className="btn btn-primary">
                {id? 'Edit Product' : 'Add Product'}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    edittingProduct: state.edittingProduct,
  };
}

let mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (product)=> {
      dispatch(typesAction.addProductAPI(product));
    }, 
    updateProduct: (product, id)=> {
      dispatch(typesAction.updateProductAPI(id, product));
    },
    getProductItem: (id)=> {
      dispatch(typesAction.getProductItemAPI(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProductPage);
