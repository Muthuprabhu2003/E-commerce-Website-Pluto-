import React, { useState, useContext } from "react";
import "./App.css";
import { Cartcontext } from "./cartcontext";

function Biscuits() {
  const { addToCart } = useContext(Cartcontext);
  const [showAlert, setShowAlert] = useState(false);

  const baseItems = [
    {
      name: "Marie Gold",
      price: 50,
      images: [
        "https://www.jiomart.com/images/product/600x600/490332886/britannia-marie-gold-biscuits-68-g-product-images-o490332886-p490332886-0-202208031826.jpg",
      ],
    },
    {
      name: "Oreo Biscuits",
      price: 100,
      images: ["https://images5.alphacoders.com/118/1181873.jpg"],
    },
    {
      name: "Cream Biscuits",
      price: 60,
      images: [
        "https://fetchnbuy.in/cdn/shop/files/218646-2_6-britannia-treat-jim-jam-cream-biscuits_1920x.jpg?v=1685961323",
      ],
    },
  ];

  const generateItems = () => {
    const items = [];
    for (let i = 0; i < 20; i++) {
      const base = baseItems[i % baseItems.length];
      const randomImage =
        base.images[Math.floor(Math.random() * base.images.length)];
      const quantity = 1 + Math.floor(Math.random() * 3);
      const priceVariation = Math.floor(Math.random() * 11) - 5;
      items.push({
        id: i + 1,
        name: `${base.name} Pack of ${quantity}`,
        image: randomImage,
        price: Math.max(10, base.price + priceVariation * quantity),
        quantity,
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
      <h1>Biscuits</h1>

      {showAlert && <div className="alert">✅ Added to cart!</div>}

      <div className="product-grid">
        {items.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Biscuits;
