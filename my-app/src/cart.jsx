import React, { useContext } from "react";
import axios from "axios";
import { Cartcontext } from "./cartcontext";
import "./App.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromcart } = useContext(Cartcontext);
  const navigate = useNavigate();

  const totalPrice = cart
    .reduce((total, item) => total + item.price * (item.quantity || 1), 0)
    .toFixed(2);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/orders", {
        cart,
        total: totalPrice,
      })
      .then((response) => {
        console.log("Order submitted:", response.data);
        navigate("/payment"); 
      })
      .catch((error) => {
        console.error("Error submitting order:", error);
      });
  };

  return (
    <div className="cart">
      <h2>Checkout</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} width="50" />
                {item.name} - ₹{item.price} x {item.quantity || 1}{" "}
                <button onClick={() => removeFromcart(item)}>X</button>
              </li>
            ))}
          </ul>

          <div className="total">Total: ₹{totalPrice}</div>

          <form onSubmit={handleSubmit}>
            <button type="submit" className="abutton">Place Order & Pay</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Cart;
