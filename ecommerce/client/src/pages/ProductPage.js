import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Image, Button, Spinner, Form } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(res => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching product:', err);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product, qty);
    alert('Product added to cart!');
  };

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" />
      </Container>
    );
  }

  if (!product) {
    return (
      <Container className="text-center mt-5">
        <h4>Product not found.</h4>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <Image src={product.image} fluid rounded />
        </Col>
        <Col md={6}>
          <h2>{product.name}</h2>
          <h4 className="text-success mt-3">₹{product.price}</h4>
          <p className="mt-4">{product.description}</p>

          <Form.Group controlId="qty" className="mt-3">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              min="1"
              value={qty}
              onChange={(e) => setQty(Number(e.target.value))}
              style={{ width: '100px' }}
            />
          </Form.Group>

          <Button variant="primary" className="mt-3" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductPage;
