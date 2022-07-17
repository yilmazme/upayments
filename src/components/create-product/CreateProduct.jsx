import React, { useState, useEffect } from "react";
import Header from "../../subs/header/Header";
import "./CreateProduct.scss";
import { useHistory } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

function CreateProduct() {
  const [product, setProduct] = useState({ name: "", description: "", category: "", price: null, avatar: "", developerEmail: "10myilmaz@gmail.com" });
  const [categories, setCategories] = useState([]);

  const history = useHistory();
  useEffect(() => {
    getCategories();

    return () => {};
  }, []);

  async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }

  const getCategories = async () => {
    const res = await fetch("https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/");
    const data = await res.json();

    setCategories(data);

    return () => {};
  };
  const handleChange = (event) => {
    setProduct((values) => ({ ...values, [event.target.name]: event.target.value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ product });

    postData("https://62286b649fd6174ca82321f1.mockapi.io/case-study/products", product).then((data) => {
      console.log({ data });
    });
  };
  const goBack = () => {
    history.push("/products");
  };
  return (
    <div className="create-container">
      <Header />
      <div className="form-container">
        <h2>Create Product</h2>
        <form>
          <div className="form-group">
            <input type="text" name="name" placeholder="Product name" onChange={handleChange} />
          </div>
          <div className="form-group">
            <textarea name="description" cols="30" rows="4" placeholder="Description" onChange={handleChange}></textarea>
          </div>
          <div className="form-group">
            <input type="text" name="avatar" placeholder="Image URL" onChange={handleChange} />
          </div>
          <div className="form-group">
            <div className="select-wrapper">
              <select name="category" onChange={handleChange}>
                <option value="">Categories</option>
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
          <div className="form-group">
            <input type="text" name="price" placeholder="Price" onChange={handleChange} />
          </div>
          <button onClick={handleSubmit}>SUBMIT</button>
        </form>
        <div className="back-button" onClick={goBack}>
          <p>Go Back</p>
          <RiArrowGoBackFill style={{ width: "3rem", height: "2rem" }} />
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
