import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ProductCard from "../../subs/product-card/ProductCard";
import "./Products.scss";
import { BsPlusCircleFill } from "react-icons/bs";
import Header from "../../subs/header/Header";

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

  const getCategories = async () => {
    const res = await fetch("https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/");
    const data = await res.json();

    setCategories(data);

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

  const removeDeletedProduct = (id) => {
    let productWithDeletedOne = products.filter((prod) => prod.id !== id);
    setFilteredProducts(productWithDeletedOne);
  };
  return (
    <div className="container">
      <Header />
      <div className="filter">
        <p>Apple Watch, Samsung S21, Mackbook Pro...</p>
        <div className="select-wrapper">
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
      </div>
      <div className="cart-container">
        {filteredProducts &&
          filteredProducts.map((product) => {
            return <ProductCard product={product} key={product.id} sendId={removeDeletedProduct} />;
          })}
      </div>
      <div className="add-button">
        <BsPlusCircleFill style={{ width: "3rem", height: "3rem" }} onClick={goCreate} />
      </div>
    </div>
  );
}

export default Products;
