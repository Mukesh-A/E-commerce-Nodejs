import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  },[]);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products");
    result = await result.json();
    setProducts(result);
  };

  const deleteProducts = async (id) => {
    let result = await fetch(`http://localhost:5000/products/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    console.log(result);
    // if (result) {
    // //   alert("deleted");
    // }
  };
  //   console.warn(products);
  return (
    <div className="products-list">
      <h3>ProductList</h3>
      <ul>
        <li>s.no</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Operation</li>
      </ul>

      {products.map((item, index) => (
        <ul key={item._id}>
          <li>{index}</li>
          <li>{item.name}</li>
          <li>{item.price}</li>
          <li>{item.category}</li>
          <li>
            <button onClick={() => deleteProducts(item._id)}>Delete</button>
          </li>
          <li>
            <Link to={"/update/"+item._id}>update</Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ProductList;
