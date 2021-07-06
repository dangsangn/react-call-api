import { Component } from "react";
import routers from "./routers";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
        </div>
        {this.showRouters(routers)}
      </Router>
    );
  }

  showRouters = (routers) => {
    let result = null;
    if (routers.length > 0) {
      result = routers.map((route, index) => {
        return (
          <Route
            key={index} 
            path={route.path} exact={route.exact}>
            {route.main}
          </Route>
        );
      });
    }
    return <Switch>{result}</Switch>;
  };
}

export default App;
//npx json-server --watch db.json