import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./payment.css";

function PaymentPost() {
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    method: "UPI",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchLatestOrderTotal();
  }, []);

  const fetchLatestOrderTotal = () => {
    axios
      .get("http://localhost:3000/orders")
      .then((res) => {
        const orders = res.data;
        if (orders.length > 0) {
          const latestOrder = orders[orders.length - 1];
          setFormData((prev) => ({
            ...prev,
            amount: parseFloat(latestOrder.total),
          }));
        }
      })
      .catch((err) => console.error("Error fetching order total", err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payment = {
      name: formData.name,
      amount: formData.amount,
      method: formData.method,
      date: new Date().toLocaleString(),
    };

    axios
      .post("http://localhost:3000/payments", payment)
      .then(() => {
        setShowModal(true);
        setFormData({
          name: "",
          amount: formData.amount,
          method: "UPI",
          cardNumber: "",
          expiry: "",
          cvv: "",
        });

        
        setTimeout(() => {
          navigate("/adver");
        }, 3000);
      })
      .catch((err) => console.error("Error posting payment", err));
  };

  return (
    <div className="payment-container">
      <h2>💰 Make a Payment</h2>
      <form className="payment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input type="number" name="amount" value={formData.amount} disabled />

        <select name="method" value={formData.method} onChange={handleChange}>
          <option value="UPI">UPI</option>
          <option value="Card">Card</option>
          <option value="Cash">Cash</option>
        </select>

        {formData.method === "UPI" && (
          <div className="upi-qr">
            <p>Scan this QR with any UPI app</p>
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?data=upi://pay&size=150x150"
              alt="Fake UPI QR"
              width={150}
              height={150}
            />
          </div>
        )}

        {formData.method === "Card" && (
          <div className="card-fields">
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={formData.cardNumber}
              onChange={handleChange}
              maxLength={16}
              required
            />
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              value={formData.expiry}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="cvv"
              placeholder="CVV"
              maxLength={3}
              value={formData.cvv}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <button type="submit">Submit</button>
      </form>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>✅ Payment Successful</h3>
            <p>Thank you! You’ll be redirected to home shortly.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PaymentPost;
