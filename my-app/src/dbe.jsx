import React, { useState, useContext } from "react";
import "./App.css";
import { Cartcontext } from "./cartcontext";

function DBE() {
  const { addToCart } = useContext(Cartcontext);
  const [showAlert, setShowAlert] = useState(false);

  const baseItems = [
    {
      name: "Milk",
      price: 25,
      quantity: 1,
      images: ["https://wallpaperaccess.com/full/1751370.jpg"]
    },
    {
      name: "Eggs",
      price: 36,
      quantity: 6,
      images: ["https://static.vecteezy.com/system/resources/previews/030/637/826/non_2x/eggs-image-hd-free-photo.jpg"]
    },
    {
      name: "Bread",
      price: 35,
      quantity: 1,
      images: [
        "https://wallpaperaccess.com/full/4435101.jpg",
        "https://images.pexels.com/photos/2434/bread-food-healthy-breakfast.jpg"
      ]
    },
    {
      name: "Cheese",
      price: 40,
      quantity: 1,
      images: ["https://wallpaperaccess.com/full/1970466.jpg"]
    }
  ];

  const generateItems = () => {
    const items = [];
    for (let i = 0; i < 20; i++) {
      const base = baseItems[i % baseItems.length];
      const randomImage = base.images[Math.floor(Math.random() * base.images.length)];
      items.push({
        id: i + 1,
        name: `${base.name} ${Math.floor(Math.random() * 3 + 1)} pack(s)`,
        image: randomImage,
        price: base.price + Math.floor(Math.random() * 11) - 5,
        quantity: base.quantity + Math.floor(Math.random() * 2)
      });
    }
    return items;
  };

  const [items] = useState(generateItems());

  const handleAddToCart = (item) => {
    addToCart(item);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 1500);
  };

  return (
    <div className="gk-page">
      <h1>Dairy Products</h1>

      {showAlert && <div className="alert">✅ Added to cart!</div>}

      <div className="product-grid">
        {items.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DBE;
