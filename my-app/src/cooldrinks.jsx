import React, { useState, useContext } from "react";
import "./App.css";
import { Cartcontext } from "./cartcontext";

function CoolDrinks() {
  const { addToCart } = useContext(Cartcontext);
  const [showAlert, setShowAlert] = useState(false);

  const baseDrinks = [
    {
      name: "Coca Cola",
      basePrice: 150,
      images: ["https://kouvasmarket.gr/wp-content/uploads/2020/06/145141_3-1024x1024.jpg"]
    },
    {
      name: "Pepsi",
      basePrice: 50,
      images: ["https://assets.iceland.co.uk/i/iceland/pepsi_15l_42291_T1.jpg?$pdpzoom$"]
    },
    {
      name: "Sprite",
      basePrice: 150,
      images: ["https://www.thewarehouse.co.nz/on/demandware.static/-/Sites-twl-master-catalog/default/dw020f91f6/images/hi-res/8B/5B/R366124_40.jpg"]
    },
    {
      name: "Fanta",
      basePrice: 150,
      images: ["https://cdnx.jumpseller.com/comercial-jp/image/10744984/resize/540/540?1630541500"]
    },
    {
      name: "Mountain Dew",
      basePrice: 150,
      images: ["https://media.supermart.ae/15923-thickbox_default/mountain-dew-soft-drink-15l.jpg"]
    },
    {
      name: "7UP",
      basePrice: 50,
      images: ["https://media.supermart.ae/15921-thickbox_default/7up-soft-drink-15l.jpg"]
    }
  ];

  const generateDrinks = () => {
    const drinks = [];
    for (let i = 0; i < 20; i++) {
      const base = baseDrinks[i % baseDrinks.length];
      const randomImage = base.images[Math.floor(Math.random() * base.images.length)];
      const volumeOptions = [1, 1.25, 1.5, 2];
      const volume = volumeOptions[Math.floor(Math.random() * volumeOptions.length)];
      const priceVariation = Math.floor(Math.random() * 21) - 10;

      drinks.push({
        id: i + 1,
        name: `${base.name} ${volume}L`,
        image: randomImage,
        price: base.basePrice + priceVariation,
        quantity: 1
      });
    }
    return drinks;
  };

  const [items] = useState(generateDrinks());

  const handleAddToCart = (item) => {
    addToCart(item);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 1500);
  };

  return (
    <div className="gk-page">
      <h1>Cool Drinks</h1>

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

export default CoolDrinks;
