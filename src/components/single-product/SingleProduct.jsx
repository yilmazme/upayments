import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../subs/header/Header";
import "./SingleProduct.scss";
import { useHistory } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

function SingleProduct() {
  let { id } = useParams();
  const [product, setProduct] = useState({});
  const history = useHistory();

  useEffect(() => {
    fetch(` https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}
    `)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      });

    return () => {};
  }, [id]);

  const goBack = () => {
    history.push("/products");
  };
  return (
    <div className="product-container">
      <Header />
      <div className="product">
        <div className="upper">
          <div className="img-div">
            <img src={product.avatar} alt={product.name} />
          </div>
          <div className="upper-info">
            <h1>{product.name}</h1>
            <p> &#36; {product.price}</p>
          </div>
          <div className="back-button" onClick={goBack}>
            <p>Go Back</p>
            <RiArrowGoBackFill style={{ width: "3rem", height: "2rem" }} />
          </div>
        </div>
        <div className="description">
          <h3>Description</h3>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
