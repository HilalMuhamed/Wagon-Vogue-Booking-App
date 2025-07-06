
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../styles/global.css';
import '../styles/productCreation.css';

const ProductCreate = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    services: '',
    image: null,
    timein: '',
    timeout: '',
    seats: '',
    rate: '',
    features: '',
    rating: ''
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    Object.keys(formData).forEach((key) => form.append(key, formData[key]));

    fetch('http://localhost:8080/api/product', {
      method: 'POST',
      body: form
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to submit");
        return res.json();
      })
      .then((data) => {
        console.log("Product created:", data);
        navigate('/profile'); 
      })
      .catch((err) => {
        console.error("Error submitting product:", err);
        alert("Something went wrong! Please try again.");
      });
  };

  return (
    <div className="createProduct">
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
          <h1>Simplifying Business Scheduling!</h1>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <label>Venture Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required /><br /><br />

            <label>Category/Services</label>
            <input type="text" name="services" value={formData.services} onChange={handleChange} required /><br /><br />

            <label htmlFor="image">Select Image:</label>
            <input type="file" id="image" name="image" accept="image/*" onChange={handleChange} required /><br /><br />

            <label>Scheduled time</label>
            <input type="time" name="timein" value={formData.timein} onChange={handleChange} required />
            <label>To</label>
            <input type="time" name="timeout" value={formData.timeout} onChange={handleChange} required /><br /><br />

            <label>Available seats</label>
            <input type="number" name="seats" value={formData.seats} onChange={handleChange} required /><br /><br />

            <label>Rate / Pricing</label>
            <input type="number" name="rate" value={formData.rate} onChange={handleChange} required /><br /><br />

            <label>Features</label>
            <input type="text" name="features" value={formData.features} onChange={handleChange} required /><br /><br />

            <label>Rating</label>
            <input type="number" name="rating" value={formData.rating} onChange={handleChange} required /><br /><br />

            <input type="submit" value="Submit" />
          </form>
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

export default ProductCreate;
