import React, { useState, useContext } from "react";
import "./App.css";
import { Cartcontext } from "./cartcontext";

function IceCream() {
  const { addToCart } = useContext(Cartcontext);
  const [showAlert, setShowAlert] = useState(false);

  const baseItems = [
    {
      name: "Vanilla Ice Cream",
      price: 150,
      images: [
        "https://www.wallpaperflare.com/static/856/720/918/ice-cream-syrup-chocolate-strawberry-wallpaper.jpg"
      ]
    },
    {
      name: "Chocolate Ice Cream",
      price: 180,
      images: [
        "https://th.bing.com/th/id/R.8f83f5f0a74978bb96204aa4664dc3a1?rik=Ax5yTiAT3QCQcg&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-18%2fChocolate-Ice-Cream-HD-Desktop-Wallpaper-46571.jpg&ehk=k4clpS21XwoQF5jZFe%2bPOhK6kBVdCWAbgeU3JoEBKcY%3d&risl=&pid=ImgRaw&r=0"
      ]
    },
    {
      name: "Strawberry Ice Cream",
      price: 170,
      images: [
        "https://e1.pxfuel.com/desktop-wallpaper/632/232/desktop-wallpaper-strawberry-ice-cream-strawberry-ice.jpg"
      ]
    }
  ];

  const generateItems = () => {
    const items = [];
    for (let i = 0; i < 20; i++) {
      const base = baseItems[i % baseItems.length];
      const randomImage =
        base.images[Math.floor(Math.random() * base.images.length)];
      const randomQuantity = 0.5 * (1 + Math.floor(Math.random() * 3)); 
      const priceVariation = Math.floor(Math.random() * 21) - 10; 
      items.push({
        id: i + 1,
        name: `${base.name} ${randomQuantity} KG`,
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
      <h1>Ice Cream</h1>

      {showAlert && <div className="alert">✅ Added to cart!</div>}

      <div className="product-grid">
        {items.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <p>Quantity: {item.quantity} KG</p>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IceCream;
