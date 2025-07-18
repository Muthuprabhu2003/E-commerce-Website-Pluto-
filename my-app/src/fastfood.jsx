import React, { useState, useContext } from "react";
import "./App.css";
import { Cartcontext } from "./cartcontext";

function FastFood() {
  const { addToCart } = useContext(Cartcontext);
  const [showAlert, setShowAlert] = useState(false);

  const baseItems = [
    {
      name: "Margherita Pizza",
      price: 450,
      images: [
        "https://jackscanada.ca/wp-content/uploads/2021/06/pizza-margherita-margarita-mozzarella-cheese-tomato-olive-italian-pizza-pizza-margherita-margarita-mozzarella-133884612.jpg"
      ]
    },
    {
      name: "Cheeseburger",
      price: 300,
      images: [
        "https://th.bing.com/th/id/R.1fac669bdffb2f13920b1c8591334d3f?rik=Twt5EagomVep7Q&riu=http%3a%2f%2fwww.baltana.com%2ffiles%2fwallpapers-5%2fCheeseburger-Wallpaper-HD-17269.jpg&ehk=3KKHvUVFBjxDWEOghQQHdVEvBdHAcabPaAXO6L7I%2f%2b4%3d&risl=1&pid=ImgRaw&r=0"
      ]
    },
    {
      name: "Parotta",
      price: 25,
      images: ["https://wallpaperaccess.com/full/9409954.jpg"]
    },
    {
      name: "French Fries",
      price: 90,
      images: ["https://wallpapers.com/images/hd/crispy-french-fries-6jac0m7qiz9709hf.jpg"]
    },
    {
      name: "Veg Roll",
      price: 120,
      images: ["https://wbcdn.in/assets/img/uploads/mywb/uploads/img_7da6ad49d67349e5fe81ba0df42255eaf7cdb929.jpg"]
    },
    {
      name: "Fried Chicken",
      price: 180,
      images: ["https://images2.alphacoders.com/132/1322069.png"]
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
        name: `${base.name} ${randomQuantity} pcs`,
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
      <h1>Fast Foods</h1>

      {showAlert && <div className="alert">✅ Added to cart!</div>}

      <div className="product-grid">
        {items.map((item) => (
          <div className="product-card" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
            <p>Quantity: {item.quantity} pcs</p>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FastFood;
