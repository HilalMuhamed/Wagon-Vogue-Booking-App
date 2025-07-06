import '../styles/global.css';
import '../styles/home.css';

const Home = () => {
  const explore = () => window.location.href = '/explore';

  const cards = [
    {
      label: 'Saloons',
      img: 'https://images.pexels.com/photos/4422102/pexels-photo-4422102.jpeg?_gl=1*16pld8c*_ga*MTYyNTE2NjcyMi4xNzUxNzgyNTQ3*_ga_8JE65Q40S6*czE3NTE3ODI1NDckbzEkZzEkdDE3NTE3ODI2MDEkajYkbDAkaDA.'
    },
    {
      label: 'Resturants',
      img: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      label: 'Concert',
      img: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      label: 'LiveEvents',
      img: 'https://images.pexels.com/photos/2350325/pexels-photo-2350325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  return (
        <div className="home-page">
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

      <main  className="main-content">
        <h1>SCHEDULE YOUR<br />APOINTMENT WITH <span>US</span></h1>

        <div className="button-container">
          <button className="ActionBtn" type="button" onClick={explore}>
            Browse
            <svg width="77" height="37" viewBox="0 0 77 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M75.76 20.26C76.74 19.29 76.74 17.70 75.76 16.73L59.85 0.82C58.88 -0.15 57.29 -0.15 56.32 0.82C55.34 1.79 55.34 3.38 56.32 4.35L70.46 18.5L56.32 32.64C55.34 33.61 55.34 35.20 56.32 36.17C57.29 37.15 58.88 37.15 59.85 36.17L75.76 20.26ZM0 21H74V16H0V21Z" fill="white" />
            </svg>
          </button>
        </div>

        <div className="HomeFullCard">
          {cards.map((item, index) => (
            <div className="HomeCard" key={index}>
              <img src={item.img} alt={item.label} width="200" height="250" />
              <br />
              <button onClick={explore} type="button">
                {item.label}
                <svg width="40" height="15" viewBox="0 0 77 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M75.76 20.26C76.74 19.29 76.74 17.70 75.76 16.73L59.85 0.82C58.88 -0.15 57.29 -0.15 56.32 0.82C55.34 1.79 55.34 3.38 56.32 4.35L70.46 18.5L56.32 32.64C55.34 33.61 55.34 35.20 56.32 36.17C57.29 37.15 58.88 37.15 59.85 36.17L75.76 20.26ZM0 21H74V16H0V21Z" fill="white" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="button-container">
          <button type="button" onClick={explore}>
            More
            <svg width="52" height="30" viewBox="0 0 52 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M51.41 16.41C52.19 15.63 52.19 14.36 51.41 13.58L38.68 0.85C37.90 0.07 36.63 0.07 35.85 0.85C35.07 1.63 35.07 2.90 35.85 3.68L47.17 15L35.85 26.31C35.07 27.09 35.07 28.36 35.85 29.14C36.63 29.92 37.90 29.92 38.68 29.14L51.41 16.41ZM0 17H50V13H0V17Z" fill="#EEEEEE" />
            </svg>
          </button>
        </div>

        <h1>Digital reservation for <span>better</span> convenience</h1>
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

export default Home;
