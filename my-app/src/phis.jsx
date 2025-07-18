import React, { useEffect, useState } from "react";
import axios from "axios";
import "./payment.css";
import { Link } from "react-router-dom";
function PaymentGet() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/payments")
      .then((res) => setPayments(res.data))
      .catch((err) => console.error("Error fetching payments", err));
  }, []);

  return (
    <div className="payment-container">
      <h3>📄 Payment History</h3>
      {payments.length === 0 ? (
        <p>No payments found.</p>
      ) : (
        <table className="payment-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Amount (₹)</th>
              <th>Method</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((pay, idx) => (
              <tr key={pay.id || idx}>
                <td>{idx + 1}</td>
                <td>{pay.name}</td>
                <td>{pay.amount}</td>
                <td>{pay.method}</td>
                <td>{pay.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Link to="/admin">
        <button className="abutton">Back</button>
      </Link>
    </div>
  );
}

export default PaymentGet;
