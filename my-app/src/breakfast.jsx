import React, { useState, useContext } from "react";
import "./App.css";
import { Cartcontext } from "./cartcontext";

function ReadyMadeItems() {
  const { addToCart } = useContext(Cartcontext);
  const [showAlert, setShowAlert] = useState(false);

  const baseDishes = [
    {
      name: "Chicken Biryani",
      basePrice: 300,
      images: ["https://wallpaperaccess.com/full/1972917.jpg"]
    },
    {
      name: "Vegetable Fried Rice",
      basePrice: 200,
      images: ["https://e0.pxfuel.com/wallpapers/306/876/desktop-wallpaper-vegetable-fried-rice-recipe.jpg"]
    },
    {
      name: "Pasta Primavera",
      basePrice: 250,
      images: ["https://storage.googleapis.com/gen-atmedia/3/2018/04/a9696fb4dd17254516d5ebca8e3705ac7243dcfa.jpeg"]
    },
    {
      name: "Paneer Tikka",
      basePrice: 180,
      images: ["https://www.cookforindia.com/wp-content/uploads/2016/08/Paneer-Tikka-_LR.jpg"]
    },
    {
      name: "Fish Curry",
      basePrice: 350,
      images: ["https://static.toiimg.com/photo/74474551.cms"]
    },
    {
      name: "Mutton Curry",
      basePrice: 400,
      images: ["https://myfoodstory.com/wp-content/uploads/2016/12/Easy-Mutton-Curry-1-1024x1536.jpg"]
    }
  ];

  const generateItems = () => {
    const items = [];
    for (let i = 0; i < 20; i++) {
      const base = baseDishes[i % baseDishes.length];
      const variantNumber = Math.floor(Math.random() * 100);
      const randomImage = base.images[Math.floor(Math.random() * base.images.length)];
      const priceVariation = Math.floor(Math.random() * 41) - 20;

      items.push({
        id: i + 1,
        name: `${base.name} Special #${variantNumber}`,
        image: randomImage,
        price: base.basePrice + priceVariation,
        quantity: 1
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
      <h1>Ready-Made Items</h1>

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

export default ReadyMadeItems;
