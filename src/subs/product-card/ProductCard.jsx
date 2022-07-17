import React from "react";
import "./ProductCard.scss";
import { Link } from "react-router-dom";
import { TiDelete } from "react-icons/ti";

function ProductCard({ product }) {
  const deleteProduct = (id) => {
    console.log(id);
    fetch(`https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`, { method: "DELETE" }).then((res) => console.log(res));
  };
  return (
    <div className="product-card">
      <div className="delete-button" onClick={() => deleteProduct(product.id)}>
        <TiDelete style={{ width: "2rem", height: "2rem" }} />
      </div>
      <div className="img-div">
        <Link to={`/products/${product.id}`}>
          <img src={product.avatar} alt={product.name} />
        </Link>
      </div>
      <div className="info">
        <p>{product.name}</p>
        <p> &#36; {product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
