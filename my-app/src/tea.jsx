import React, { useState, useContext } from "react";
import "./App.css";
import { Cartcontext } from "./cartcontext";

function TeaPowder() {
  const { addToCart } = useContext(Cartcontext);

  const baseItems = [
    {
      name: "Darjeeling Tea Powder",
      price: 300,
      images: ["https://healthyfibres.com/wp-content/uploads/2023/08/Darrjeling-tea-600x600.jpg"]
    },
    {
      name: "Sunrise Coffee Powder",
      price: 250,
      images: ["https://5.imimg.com/data5/SELLER/Default/2023/2/OJ/ZF/NG/55805387/nescafe-sunrise-premium-instant-coffee-powder-1-1000x1000.jpg"]
    },
    {
      name: "Green Tea Powder",
      price: 400,
      images: ["https://greenearthco.com.au/wp-content/uploads/2021/07/Absolute-Green-Certified-Organic-Green-Tea-Powder-150g_media-01.jpg"]
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
        price: Math.round(base.price + priceVariation),
        quantity: randomQuantity
      });
    }
    return items;
  };

  const [items] = useState(generateItems());

  return (
    <div className="gk-page">
      <h1>Tea & Coffee Powders</h1>
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

export default TeaPowder;
