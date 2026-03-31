import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  // Get categories
  const getCategories = () => {
    axios.get("https://dummyjson.com/products/categories")
      .then((res) => {
        setCategories(res.data);
      });
  };

  // Get products (with filter)
  const getProducts = (cat = "") => {
    let url = cat
      ? `https://dummyjson.com/products/category/${cat}`
      : `https://dummyjson.com/products?limit=100`;

    axios.get(url)
      .then((res) => {
        setProducts(res.data.products);
      });
  };

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  return (
    <div className="app">

      {/* HEADER */}
      <header className="header">
        <h2>MyCart</h2>
        <input type="text" placeholder="Search..." />
      </header>

      {/* MAIN */}
      <div className="main">

        {/* SIDEBAR */}
        <div className="sidebar">
          <h3>Categories</h3>
          <ul>
            <li onClick={() => getProducts("")}>All</li>

            {categories.map((cat, index) => (
              <li key={index} onClick={() => getProducts(cat.slug)}>
                {cat.name}
              </li>
            ))}
          </ul>
        </div>

        {/* CONTENT */}
        <div className="content">

          <div className="banner">
            <h1>Products</h1>
          </div>

          <div className="products">
            {products.map((item) => (
              <div className="card" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <h4>{item.title}</h4>
                <p>₹ {item.price}</p>
                <button>Add to Cart</button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;