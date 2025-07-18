import React, { useState, useContext } from "react";
import "./App.css";
import { Cartcontext } from "./cartcontext";

function Snacks() {
  const { addToCart } = useContext(Cartcontext);
  const [showAlert, setShowAlert] = useState(false);

  const baseItems = [
    {
      name: "Chicken",
      price: 150,
      quantity: 1,
      images: [
        "https://img.freepik.com/premium-photo/raw-chicken-meat-white-background_58830-688.jpg?w=2000"
      ]
    },
    {
      name: "Fish",
      price: 200,
      quantity: 1,
      images: [
        "https://tse3.mm.bing.net/th?id=OIP.KJUaWvjxrYePYhyEFzEqngHaGD&pid=Api&P=0&h=180"
      ]
    },
    {
      name: "Crab",
      price: 350,
      quantity: 1,
      images: [
        "https://www.nutritionadvance.com/wp-content/uploads/2021/02/cooked-crab.jpg"
      ]
    },
    {
      name: "Mutton",
      price: 600,
      quantity: 1,
      images: [
        "https://www.foodlocker.com.ng/public/product/goat%20meat.jpeg",
        "https://www.foodlocker.com.ng/public/product/goat%20meat.jpeg"
      ]
    }
  ];

  const generateItems = () => {
    const items = [];
    for (let i = 0; i < 20; i++) {
      const base = baseItems[i % baseItems.length];
      const randomImage =
        base.images[Math.floor(Math.random() * base.images.length)];
      const randomQuantity = Math.floor(Math.random() * 2 + 1); // 1 or 2
      items.push({
        id: i + 1,
        name: `${base.name} ${randomQuantity * 0.5}kg`,
        image: randomImage,
        price: base.price + Math.floor(Math.random() * 51) - 25,
        quantity: 0.5 * randomQuantity
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
      <h1>Fresh Meat</h1>

      {showAlert && <div className="alert">✅ Added to cart!</div>}

      <div className="product-grid">
        {items.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <p>Quantity: {item.quantity}kg</p>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Snacks;
