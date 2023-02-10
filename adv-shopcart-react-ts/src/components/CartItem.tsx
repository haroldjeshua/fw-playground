import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utils/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{
          width: "126px",
          height: "64px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted " style={{ fontSize: ".75rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".85rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
