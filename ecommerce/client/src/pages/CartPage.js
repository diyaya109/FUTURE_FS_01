import React from 'react';
import { useCart } from '../context/CartContext';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <Container className="py-5">
      <h2 className="mb-4">🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <Row key={item._id} className="mb-4 align-items-center border-bottom pb-3">
            <Col xs={3} md={2}>
              <Image src={item.image} alt={item.name} fluid rounded />
            </Col>
            <Col xs={9} md={4}>
              <h5>{item.name}</h5>
              <p className="text-muted">$ {item.price.toFixed(2)}</p>
            </Col>
            <Col md={3}>
              <Button
                variant="outline-dark"
                onClick={() => updateQuantity(item._id, item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                -
              </Button>{' '}
              <span className="px-2">{item.quantity}</span>
              <Button
                variant="outline-dark"
                onClick={() => updateQuantity(item._id, item.quantity + 1)}
              >
                +
              </Button>
            </Col>
            <Col md={2}>
              <p>
                <strong>$ {(item.price * item.quantity).toFixed(2)}</strong>
              </p>
            </Col>
            <Col md={1}>
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => removeFromCart(item._id)}
              >
                ✖
              </Button>
            </Col>
          </Row>
        ))
      )}
      {cart.length > 0 && (
        <h4 className="text-end mt-4">Total: $ {calculateTotal()}</h4>
      )}
    </Container>
  );
};

export default CartPage;
