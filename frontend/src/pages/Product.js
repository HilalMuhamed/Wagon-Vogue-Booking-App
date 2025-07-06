
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/global.css';
import '../styles/product.css';
import axios from 'axios';

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [seatsSelected, setSeatsSelected] = useState(0);
  const [price, setPrice] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const pricePerSeat = 10;

  useEffect(() => {
    axios.get(`http://localhost:8080/api/product/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error("Failed to fetch product:", err));
  }, [id]);

  const handleCheckboxChange = (e) => {
    const updated = [...selectedSeats];
    const value = parseInt(e.target.value);

    if (e.target.checked) {
      updated.push(value);
    } else {
      const index = updated.indexOf(value);
      if (index !== -1) updated.splice(index, 1);
    }

    setSelectedSeats(updated);
    setSeatsSelected(updated.length);
    setPrice(updated.length * pricePerSeat);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const orderData = {
      time1: e.target.time1.value,     
      time2: e.target.time2.value,    
      date: e.target.date.value,       
      seats: seatsSelected,            
      price: price                     
    };

    axios.post('http://localhost:8080/api/reserve', orderData)
      .then(res => {
        console.log("Order placed:", res.data);
        navigate('/explore');
      })
      .catch(err => {
        console.error("Order failed:", err);
        alert("Something went wrong while placing the order.");
      });
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-page">
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
        <h1>{product.name}</h1>
        <div className="product-details-grid">
          <div className="product-image-box">
            <img src={`http://localhost:8080/api/image/${product.id}`} alt={product.name} />
            <p className="feature">{product.features}</p>
            <p className="price">Price: ₹{product.rate}</p>
          </div>

          <form className="reservation-form" onSubmit={handleSubmit}>
            <h3>Reserve Your Spot</h3>

            <label>Check-In</label>
            <input type="time" name="time1" required />

            <label>Check-Out</label>
            <input type="time" name="time2" required />

            <label>Date</label>
            <input type="date" name="date" required />

            <label>Select Seats</label>
            <div className="checkingBoxes">
              {[...Array(product.seats)].map((_, i) => (
                <span key={i}>
                  <input
                    type="checkbox"
                    id={`seat${i + 1}`}
                    value={i + 1}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor={`seat${i + 1}`}></label>
                </span>
              ))}
            </div>

            <h5>SEATS SELECTED: <input type="number" value={seatsSelected} readOnly /></h5>
            <h5>TOTAL PRICE: <input type="number" value={price} readOnly /></h5>

            <div className="sub-btn">
              <input type="submit" value="PLACE ORDER" />
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Product;
