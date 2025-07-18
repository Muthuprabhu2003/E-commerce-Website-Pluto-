import React, { useState, useContext } from "react";
import "./App.css";
import { Cartcontext } from "./cartcontext";

function FrozenFoods() {
  const { addToCart } = useContext(Cartcontext);
  const [showAlert, setShowAlert] = useState(false);

  const baseItems = [
    {
      name: "Frozen Fried Chicken",
      price: 200,
      images: ["https://kitchencuddle.com/wp-content/uploads/2022/12/frozen-chicken.jpg"]
    },
    {
      name: "Frozen Corn",
      price: 120,
      images: ["https://www.shutterstock.com/shutterstock/videos/1059626381/thumb/1.jpg?ip=x480"]
    },
    {
      name: "Frozen Nuggets",
      price: 150,
      images: ["https://bakeitwithlove.com/wp-content/uploads/2021/05/Air-Fryer-Chicken-Nuggets-sq.jpg"]
    }
  ];

  const generateItems = () => {
    const items = [];
    for (let i = 0; i < 20; i++) {
      const base = baseItems[i % baseItems.length];
      const randomImage = base.images[Math.floor(Math.random() * base.images.length)];
      const randomQuantity = 0.25 * (1 + Math.floor(Math.random() * 4)); // 0.25, 0.5, 0.75, 1
      const priceVariation = Math.floor(Math.random() * 21) - 10; // -10 to +10
      items.push({
        id: i + 1,
        name: `${base.name} ${randomQuantity} kg`,
        image: randomImage,
        price: Math.round(base.price + priceVariation),
        quantity: randomQuantity
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
      <h1>Frozen Foods</h1>

      {showAlert && <div className="alert">✅ Added to cart!</div>}

      <div className="product-grid">
        {items.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <p>Quantity: {item.quantity} kg</p>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FrozenFoods;
