import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
function SingleProduct() {
  let { id } = useParams();
  const [product, setProduct] = useState({});

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

  return <div>SingleProduct {id}</div>;
}

export default SingleProduct;
