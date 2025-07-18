import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./AdminUsers.css";

function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get("http://localhost:3000/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error("Failed to fetch users:", err));
  };

  const deleteUser = (id) => {
    if (!window.confirm("Delete this user?")) return;

    axios.delete(`http://localhost:3000/users/${id}`)
      .then(fetchUsers)
      .catch(err => console.error("Delete failed:", err));
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>👨‍💼 Admin Panel - Users</h2>
        {users.length === 0 ? (
          <p>No users registered.</p>
        ) : (
          <table className="order-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Last Login</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.time || "Never"}</td>
                  <td>
                    <button className="abutton" onClick={() => deleteUser(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <Link to="/admin"><button className="abutton">Back</button></Link>
      </div>
    </div>
  );
}

export default AdminUsers;
