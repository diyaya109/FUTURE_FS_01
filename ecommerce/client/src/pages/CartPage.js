import React from 'react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <div className="container mt-4">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-group mb-3">
            {cartItems.map((item) => (
              <li key={item._id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{item.name}</strong> - ₹{item.price} x {item.quantity}
                </div>
                <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item._id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button className="btn btn-warning me-2" onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
