import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./App.css";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/orders")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch order data:", err);
      });
  }, []);

  return (
    <div className="orders-container">
      <h2>🛒 Order History</h2>

      {orders.length === 0 ? (
        <p className="no-orders">No orders found.</p>
      ) : (
        <table className="order-table">
          <thead>
            <tr>
              <th>Order No.</th>
              <th>Item Name</th>
              <th>Qty</th>
              <th>Price (₹)</th>
              <th>Total (₹)</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, orderIndex) =>
              Array.isArray(order.cart) ? (
                order.cart.map((item, itemIndex) => (
                  <tr key={`${orderIndex}-${itemIndex}`}>
                    {itemIndex === 0 && (
                      <td rowSpan={order.cart.length}>#{orderIndex + 1}</td>
                    )}
                    <td>{item.name}</td>
                    <td>{item.quantity || 1}</td>
                    <td>{item.price}</td>
                    

                    {itemIndex === 0 && (
                      <td rowSpan={order.cart.length}>{order.total}</td>
                    )}
                  </tr>
                ))
              ) : (
                <tr key={orderIndex}>
                  <td>#{orderIndex + 1}</td>
                  <td colSpan="4">No items</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      )}

      <Link to="/admin">
        <button className="abutton">Back</button>
      </Link>
    </div>
  );
}

export default Orders;
