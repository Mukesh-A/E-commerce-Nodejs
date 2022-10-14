import React, { useEffect, useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  const addProduct = async () => {
    if (!name || !price || !category || !company) {
      // when it return false this will go out this add product method so if u click many tym this will not get exicuted untill u pass smthing to all fields,
      // to notify this we can add a state and notify
      setError(true);
      return false;
    }
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({
        userId,
        name,
        price,
        category,
        company,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
  };

  return (
    <div className="addProducts">
      <h1>Add Products</h1>
      {error && !name && <span>fields is empty</span>}
      <input
        className="inputBox"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Product name"
      />
      {error && !price && <span>fields is empty</span>}
      <input
        className="inputBox"
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter Product price"
      />
      {error && !category && <span>fields is empty</span>}
      <input
        className="inputBox"
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Enter Product category"
      />
      {error && !company && <span>fields is empty</span>}
      <input
        className="inputBox"
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Enter Product company"
      />
      <button type="button" onClick={addProduct}>
        Add product
      </button>
    </div>
  );
};

export default AddProduct;
