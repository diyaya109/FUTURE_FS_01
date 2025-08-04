import React from 'react';
import { Container, Row, Col, ListGroup, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
    dispatch({ type: 'CLEAR_CART' });
    navigate('/');
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Checkout</h2>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            {cart.map((item) => (
              <ListGroup.Item key={item.id}>
                <Row>
                  <Col md={6}>{item.name}</Col>
                  <Col md={3}>Qty: {item.qty}</Col>
                  <Col md={3}>${item.price * item.qty}</Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h5>Order Summary</h5>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${total}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  className="w-100"
                  onClick={handlePlaceOrder}
                  disabled={cart.length === 0}
                >
                  Place Order
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
