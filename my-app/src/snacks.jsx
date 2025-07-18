import React, { useState, useContext } from "react";
import "./App.css";
import { Cartcontext } from "./cartcontext";

function Meat() {
  const { addToCart } = useContext(Cartcontext);

  const baseItems = [
    {
      name: "Nachos",
      price: 140,
      quantity: 1,
      images: [
        "https://wallpapercave.com/wp/wp2365485.jpg"
      ]
    },
    {
      name: "Murukku",
      price: 100,
      quantity: 1,
      images: [
        "https://1.bp.blogspot.com/-Ei0xXYisgvU/X6Bt6aUNYRI/AAAAAAAAY_w/BusWmQtiXl4n4wIcd8GwJOnyP68T6c6mQCLcBGAsYHQ/s2048/murukku+10.JPG"
      ]
    },
    {
      name: "Besan Jalebi",
      price: 200,
      quantity: 1,
      images: [
         "https://images.pexels.com/photos/5831655/pexels-photo-5831655.jpeg?cs=srgb&dl=pexels-saveurs-secretes-5831655.jpg&fm=jpg"
        
      ]
    },
    {
      name: "Paneer Gulab Jamun",
      price: 350,
      quantity: 1,
      images: [
         "https://images.slurrp.com/prod/articles/1m5e86yy5vl.webp"
      ]
    },
    {
      name: "Rasamalai",
      price: 600,
      quantity: 1,
      images: [
        "https://rachnas-kitchen.com/wp-content/uploads/2017/09/rasmalai-1-gpo-700-1050.jpg"
      ]
    },
    {
      name: "Badusha",
      price: 250,
      quantity: 0.5,
      images: [
         "https://i.ytimg.com/vi/clWuJGKqFgo/maxresdefault.jpg"
      ]
    }
  ];

  const generateItems = () => {
    const items = [];
    for (let i = 0; i < 20; i++) {
      const base = baseItems[i % baseItems.length];
      const randomImage = base.images[Math.floor(Math.random() * base.images.length)];
      const randomQuantity = 0.5 * (1 + Math.floor(Math.random() * 3)); // 0.5, 1, 1.5
      const priceVariation = Math.floor(Math.random() * 21) - 10; // -10 to +10
      items.push({
        id: i + 1,
        name: `${base.name} ${randomQuantity} kg`,
        image: randomImage,
        price: base.price + priceVariation,
        quantity: randomQuantity
      });
    }
    return items;
  };

  const [items] = useState(generateItems());

  return (
    <div className="gk-page">
      <h1>Snacks & Sweets</h1>
      <div className="product-grid">
        {items.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <p>Quantity: {item.quantity} kg</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Meat;
