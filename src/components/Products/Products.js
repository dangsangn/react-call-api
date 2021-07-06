import {Component} from 'react'
class Products extends Component {
    render() {
        return (
          <table class="table table-striped table-inverse table-responsive">
            <thead class="thead-inverse">
              <tr>
                <th>STT</th>
                <th>Mã</th>
                <th>Tên</th>
                <th>Gía</th>
                <th>Trạng thái</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {this.props.children}
            </tbody>
          </table>
        );
    }
}

export default Products;