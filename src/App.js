import Products from "./components/products/Products";
import "./styles/App.scss";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import SingleProduct from "./components/single-product/SingleProduct";
import CreateProduct from "./components/create-product/CreateProduct";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/products" />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:id">
          <SingleProduct />
        </Route>
        <Route path="/create">
          <CreateProduct />
        </Route>
        {/* <Route path="*">
          <NotFound />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
