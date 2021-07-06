import React from "react";
import HomePage from './Pages/HomePage/HomePage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import AddProductPage from "./Pages/ProductActionPage/AddProductPage";
import ProductListPage from "./Pages/ProductListPage/ProductListPage";

const routers = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: "/product-list",
    exact: false,
    main: () => <ProductListPage />,
  },
  {
    path: "/product/add",
    exact: false,
    main: ({ history }) => <AddProductPage history={history} />,
  },
  {
    path: "/product/:id/edit",
    exact: false,
    main: ({ history, match }) => (
      <AddProductPage history={history} match={match} />
    ),
  },
  {
    path: "",
    exact: false,
    main: () => <NotFoundPage />,
  },
];

export default routers;