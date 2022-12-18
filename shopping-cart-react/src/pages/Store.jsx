import { Row, Col } from "react-bootstrap";
import { productsArray } from "../productStore";

const Store = () => {
  return (
    <>
      <h1 align="center" className="p-3">
        Welcome to Komersiyo!
      </h1>
      <Row xs={1} md={3} className="g-4">
        {productsArray.map((product, idx) => (
          <Col align="center" key={idx}>
            <h1>{product.title}</h1>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
