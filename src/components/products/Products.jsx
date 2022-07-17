import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ProductCard from "../product-card/ProductCard";
import "../../styles/Products.scss";
import { BsPlusCircleFill } from "react-icons/bs";

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [categories, setCategories] = useState([]);
  const history = useHistory();
  useEffect(() => {
    fetch("https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFilteredProducts(data);
        setProducts(data);
        getCategories();
      });

    return () => {};
  }, []);

  const getCategories = () => {
    fetch("https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });

    return () => {};
  };

  const filetrByCategories = (value) => {
    let newCategory = products.filter((cat) => {
      if (value === "no") {
        return cat;
      } else {
        return cat.category === value;
      }
    });
    setFilteredProducts(newCategory);
  };

  const goCreate = () => {
    history.push("/create");
  };
  return (
    <div className="container">
      <div className="header">
        <h2>UPayments Store</h2>

        <h2>Register</h2>
      </div>
      <div className="filter">
        <p>Apple Watch, Samsung S21, Mackbook Pro...</p>
        <select name="cars" id="cars" onChange={(event) => filetrByCategories(event.target.value)}>
          <option value="no">All categories</option>
          {categories &&
            categories.map((cat) => {
              return (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              );
            })}
        </select>
      </div>
      <div className="cart-container">
        {filteredProducts &&
          filteredProducts.map((product) => {
            return (
              <Link key={product.id} to={`/products/${product.id}`}>
                <ProductCard product={product} />
              </Link>
            );
          })}
      </div>
      <div className="add-button">
        <BsPlusCircleFill style={{ width: "3rem", height: "3rem" }} onClick={goCreate} />
      </div>
    </div>
  );
}

export default Products;
