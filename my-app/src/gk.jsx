import React, { useState, useContext } from "react";
import "./App.css";
import { Cartcontext } from "./cartcontext";

function Gk() {
  const { addToCart } = useContext(Cartcontext);
  const [showAlert, setShowAlert] = useState(false);

  const baseItems = [
    {
      name: "Apple",
      price: 25,
      images: ["https://images.pexels.com/photos/39803/pexels-photo-39803.jpeg"]
    },
    {
      name: "Mango",
      price: 30,
      images: ["https://wallpapercave.com/wp/wp2756455.jpg"]
    },
    {
      name: "Banana",
      price: 20,
      images: ["https://images5.alphacoders.com/376/376700.jpg"]
    },
    {
      name: "Grapes",
      price: 35,
      images: [
        "https://images6.alphacoders.com/368/368747.jpg",
        "https://images.pexels.com/photos/128420/pexels-photo-128420.jpeg",
        "https://images.pexels.com/photos/70862/pexels-photo-70862.jpeg"
      ]
    },
    {
      name: "Tomato",
      price: 25,
      images: [
        "https://wallpapercave.com/wp/wp5329501.jpg",
        "https://images.pexels.com/photos/65174/pexels-photo-65174.jpeg",
        "https://images.pexels.com/photos/839725/pexels-photo-839725.jpeg"
      ]
    },
    {
      name: "Potato",
      price: 35,
      images: [
        "https://www.tasteofhome.com/wp-content/uploads/2022/07/GettyImages-1224918845-e1658929817975.jpg?w=2036"
      ]
    },
    {
      name: "Tomato",
      price: 35,
      images: [
        "https://www.tasteofhome.com/wp-content/uploads/2022/07/GettyImages-1224918845-e1658929817975.jpg?w=2036"
      ]
    }
  ];

  const generateItems = () => {
    const items = [];
    for (let i = 0; i < 20; i++) {
      const base = baseItems[i % baseItems.length];
      const randomImage = base.images[Math.floor(Math.random() * base.images.length)];
      items.push({
        id: i + 1,
        name: base.name,
        image: randomImage,
        price: base.price + Math.floor(Math.random() * 11) - 5,
        quantity: Math.floor(Math.random() * 5) + 1
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
      <h1>Fruits & Vegetables</h1>

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

export default Gk;
