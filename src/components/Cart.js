import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/features/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(add(product));
  };

  const removeFromCart = (id) => {
    dispatch(remove(id));
  };

  return (
    <div className="row">
      {cartItems.map((cartItem) => (
        <div
          className="col-md-4"
          key={cartItem.id}
          style={{ marginBottom: "10px" }}
        >
          <Card className="h-100 d-flex flex-column">
            <div className="text-center">
              <Card.Img
                variant="top"
                src={cartItem.image}
                style={{ width: "100px", height: "130px", paddingTop: "10px" }}
              />
            </div>
            <Card.Body className="d-flex flex-column align-items-center justify-content-center">
              <Card.Title>{cartItem.title}</Card.Title>
              <Card.Text>INR: {cartItem.price}</Card.Text>
              <Card.Text>Quantity: {cartItem.quantity}</Card.Text>
              <Button
                variant="primary"
                style={{ width: "130px", marginBottom: "10px" }}
                onClick={() => addToCart(cartItem)}
              >
                Add More
              </Button>
              <Button
                variant="danger"
                style={{ width: "130px" }}
                onClick={() => removeFromCart(cartItem.id)}
              >
                Remove Item
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default Cart;
