import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = (props) => {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  console.log(cart.item);

  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>Php {product.price}.00</Card.Text>
        <Button variant="primary" onClick={() => cart.addOneToCart(product.id)}>
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
