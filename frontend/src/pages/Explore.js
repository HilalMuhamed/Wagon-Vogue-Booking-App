import React, { useEffect, useState } from 'react';
import '../styles/global.css';
import '../styles/explore.css';
import axios from 'axios';

const Explore = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="explore-page">
      <nav>
        <a href="/profile"><p>PROFILE</p></a>
        <a href="/explore"><p>BROWSE</p></a>
<a href="/home" className="MainTitle">
  <p>WAGON<span className="purpleColor">VOGUE</span></p>
</a>
        <a href="/about"><p>ABOUTUS</p></a>
        <a href="/login" className="LoginButton"><p>LOGIN</p></a>
      </nav>

      <main>
        <h1>EXPLORE</h1>
        <div className="BrowsingCard">
          {products.map(product => (
            <div key={product.id} className="product-item">
              <a href={`/product/${product.id}`}>
                <img src={`http://localhost:8080/api/image/${product.id}`} width="400" height="300" alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.features}</p>
                <p>Price: {product.rate}</p>
              </a>
            </div>
          ))}
        </div>
      </main>

      <footer>
        <div className="footer-container">
          <div className="footer-section brand">
            <h2>Wagon<br />Vogue</h2>
          </div>
          <div className="footer-section">
            <h3>Our Services</h3>
            <ul>
              <li>Saloons</li>
              <li>Restaurants</li>
              <li>Concerts</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Info</h3>
            <ul>
              <li>My Account</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
            </div>
            <p>Gmail : hello@gamil.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Explore;
