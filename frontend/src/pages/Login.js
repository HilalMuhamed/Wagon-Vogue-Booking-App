import { useState } from 'react';
import '../styles/global.css';
import '../styles/login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    user: '',
    emailId: '',
    phoneNumber: '',
    dob: '',
    address: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.user) {
      alert('Please select Business or Customer');
      return;
    }

    const endpoint =
      formData.user === 'customer'
        ? 'http://localhost:8080/api/customer'
        : 'http://localhost:8080/api/owner';

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        alert('Profile created successfully!');
        window.location.href = '/profile';
      } else {
        alert('Failed to create profile.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred.');
    }
  };

  return (
    <div className="login-page">
      <nav>
        <a href="/profile"><p>PROFILE</p></a>
        <a href="/explore"><p>BROWSE</p></a>

<a href="/home" className="MainTitle">
  <p>WAGON<span className="purpleColor">VOGUE</span></p>
</a>
        <a href="/about"><p>ABOUTUS</p></a>
        <a href="/login" className="LoginButton"><p>LOGIN</p></a>
      </nav>

      <h1><span>VENUE</span> CREATION</h1>

      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">NAME:</label><br />
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required /><br />

          <label>What kind of user are you:</label><br />
          <input type="radio" id="business" name="user" value="business" onChange={handleChange} />
          <label htmlFor="business">Business</label>
          <input type="radio" id="customer" name="user" value="customer" onChange={handleChange} />
          <label htmlFor="customer">Customer</label><br /><br />

          <label htmlFor="emailId">EMAIL:</label><br />
          <input type="email" id="emailId" name="emailId" value={formData.emailId} onChange={handleChange} required /><br />

          <label htmlFor="phoneNumber">PHONE NO:</label><br />
          <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required /><br />

          <label htmlFor="dob">DOB:</label><br />
          <input type="number" id="dob" name="dob" value={formData.dob} onChange={handleChange} required /><br />

          <label htmlFor="address">ADDRESS:</label><br />
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required /><br />

          <label htmlFor="password">PASSWORD:</label><br />
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required /><br />

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
            <p>Gmail: hello@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
