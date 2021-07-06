import { Component } from "react";
import {Link, useRouteMatch} from 'react-router-dom';

class Header extends Component {
  render() {
    let menus = [
      {
        to: "/",
        name: "Home",
        exact: true,
      },
      {
        to: "/product-list",
        name: "Products",
        exact: false,
      },
    ];

    return (
      <nav className="nav nav-tabs nav-stacked ">
        <div class="bannel">
          <strong>React API</strong>
        </div>
        <ul className="nav nav-pills">{this.showMenu(menus)}</ul>
      </nav>
    );
  }

  showMenu = (menus) => {
    let result = null;
    if(menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <CustomLink key={index}
                      label={menu.name}
                      to={menu.to}
                      activityOnlyWhenExact={menu.exact}
          />
        )
      });
    }
    return result;
  }
}

let CustomLink = ({ label, to, activityOnlyWhenExact}) => {
  let match = useRouteMatch({
    path: to,
    exact: activityOnlyWhenExact
  });
  let liActive = match ? 'active' : '';
  return (
    <li className={`nav-link ${liActive}`}>
      <Link to={to}>
          {label}
      </Link>
    </li>
  )
}

export default Header;
