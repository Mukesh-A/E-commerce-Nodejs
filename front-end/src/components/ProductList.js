import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    let result = await fetch("http://localhost:5000/products", {
      headers: {
        authorization: JSON.parse(localStorage.getItem("token")),
      },
    });
    result = await result.json();
    setProducts(result);
  };

  const deleteProducts = async (id) => {
    let result = await fetch(`http://localhost:5000/products/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    console.log(result);
    if (result) {
      alert("deleted");
    }
  };

  const searchHandel = async (e) => {
    let key = e.target.value;
    if (key === "") {
      getProducts();
    } else {
      let result = await fetch(`http://localhost:5000/search/${key}`, {
        headers: {
          authorization: JSON.parse(localStorage.getItem("token")),
        },
      });
      result = await result.json();
      if (result) {
        setProducts(result);
      }
    }
  };
  //   console.warn(products);
  return (
    <div className="products-list">
      <h3>ProductList</h3>
      <input
        className="inputBox searchBox"
        type="text"
        placeholder="search product"
        onChange={searchHandel}
      />
      <ul>
        <li>s.no</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Operation</li>
      </ul>

      {products.length > 0 ? (
        products.map((item, index) => (
          <ul key={item._id}>
            <li>{index}</li>
            <li>{item.name}</li>
            <li>{item.price}</li>
            <li>{item.category}</li>
            <li>
              <button
                className="delete_btn"
                onClick={() => deleteProducts(item._id)}
              >
                Delete
              </button>

              <button className="update_btn">
                <Link className="update_btn_link" to={"/update/" + item._id}>
                  update
                </Link>
              </button>
            </li>
          </ul>
        ))
      ) : (
        <h1>No Result</h1>
      )}
    </div>
  );
};

export default ProductList;
