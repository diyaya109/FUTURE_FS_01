import React, { useEffect, useState, useRef } from 'react';
import ProductCard from '../components/ProductCard';
import './HomePage.css';
import { useCart } from '../context/CartContext';



const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const loaderRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('http://localhost:5000/api/products');
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setVisibleCount(prev => prev + 8);
      }
    });

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, []);

  const { addToCart } = useCart();

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Explore Products</h2>
      <div className="row">
        {products.slice(0, visibleCount).map(product => (
          <div key={product._id} className="col-md-3 mb-4">
            <ProductCard product={product} />
            <button
  className="btn btn-primary"
  onClick={() =>
    addToCart({
      _id: product._id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    })
  }
>
  Add to Cart
</button>

          
          </div>
        ))}
      </div>
      <div ref={loaderRef} style={{ height: '60px' }}></div>
    </div>
  );
};

export default HomePage;
