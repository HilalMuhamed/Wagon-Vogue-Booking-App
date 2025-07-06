
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Explore from './pages/Explore';
import Product from './pages/Product';
import ProductCreation from './pages/ProductCreation';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/create" element={<ProductCreation />} />
      </Routes>
    </Router>
  );
};

export default App;
