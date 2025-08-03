// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './pages/CartPage';
import Checkout from './pages/Checkout';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '85vh', padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
