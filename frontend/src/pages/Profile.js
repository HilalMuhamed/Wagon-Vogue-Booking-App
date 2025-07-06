
import React, { useEffect, useState } from 'react';
import '../styles/global.css';
import '../styles/profile.css';

const Profile = () => {
  const [customer, setCustomer] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/customer')
      .then(res => res.json())
      .then(data => setCustomer(data));

    fetch('http://localhost:8080/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
      <div className="profile-page">
    <>
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
        <h1>Profile</h1>
        <div className="box1">
          <div className="product-item">
            <h2>Name: {customer.name}</h2>
            <p>Type of user: {customer.user}</p>
            <p>No: {customer.phoneNumber}</p>
          </div>
          <p>Mail: {customer.emailId}</p>
        </div>

        <button type="button" onClick={() => window.location.href = '/create'}>Create Venue</button>

        <br />
        <div className="box2">
          {products.map(product => (
            <div className="product-item" key={product.id}>
              <img src={`http://localhost:8080/api/image/${product.id}`} width="400" height="300" alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.features}</p>
              <p>Price: {product.rate}</p>
            </div>
          ))}
        </div>

        <div className="view"></div>
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
    </>
    </div>
  );
};

export default Profile;