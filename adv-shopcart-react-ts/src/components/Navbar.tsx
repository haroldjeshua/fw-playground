import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { IconShoppingBag } from "@tabler/icons-react";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to={"/"}>
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to={"/store"}>
            Store
          </Nav.Link>
          <Nav.Link as={NavLink} to={"/about"}>
            About
          </Nav.Link>
        </Nav>
        <Button
          style={{ width: "3rem", height: "3rem" }}
          className="position-relative"
          variant="outline-primary"
          onClick={openCart}
        >
          <IconShoppingBag size="24" />
          {cartQuantity > 0 && (
            <div
              className="d-flex justify-content-center align-items-center bg-danger text-light rounded-circle position-absolute"
              style={{
                fontSize: "0.75rem",
                width: "1rem",
                height: "1rem",
                bottom: "0",
                right: "0",
                transform: "translate(25%, 25%)",
              }}
            >
              {cartQuantity}
            </div>
          )}
        </Button>
      </Container>
    </NavbarBs>
  );
}
