import Products from "./components/products/Products";
import "./styles/App.scss";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import SingleProduct from "./components/single-product/SingleProduct";
import CreateProduct from "./components/create-product/CreateProduct";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE,
};
function App() {
  return (
    <AlertProvider template={AlertTemplate} {...options}>
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
    </AlertProvider>
  );
}

export default App;
