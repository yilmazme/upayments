import React from "react";
import "../../styles/ProductCard.scss";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.avatar} alt={product.name} />
      <p>{product.name}</p>
    </div>
  );
}

export default ProductCard;
