import { Card, Button, Form, Row, Col } from "react-bootstrap";

const ProductCard = (props) => {
  const product = props.product;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>Php {product.price}.00</Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
