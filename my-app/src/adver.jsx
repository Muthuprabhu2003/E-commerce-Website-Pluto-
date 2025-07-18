import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Adver() {
  return (
    <div>
      <section className="title">
        <h1>Grocery & Kitchen</h1>
        <div className="categories">
          <Link to="/gk" className="categories__item">
            <img
              src="https://media.istockphoto.com/id/857145602/photo/vegetables-and-fruits-large-overhead-mix-group-on-colorful-background.jpg?s=612x612&w=0&k=20&c=aNvc8jC15g2hO3rSqhSkekjK1DDl5WWn0TgRdw8RDfE="
              alt="Fruits & Vegetables"
            />
            <h3>Fruits & Vegetables</h3>
          </Link>

          <div className="categories__item">
            <Link to="/DBE" className="categories__item">
            <img src="https://i0.wp.com/feastofthecenturies.wordpress.com/wp-content/uploads/2018/03/8410390-bread-milk-and-eggs.jpg?fit=1200%2C810&ssl=1" alt="Dairy, Bread & Eggs" />
            <h3>Dairy, Bread & Eggs</h3>
            </Link>
          </div>

          <div className="categories__item">
            <Link to="/Meat" className="categories__item">
            <img src="https://st2.depositphotos.com/1017986/7904/i/450/depositphotos_79046312-stock-photo-close-up-of-different-food.jpg" alt="Meats, Fish & Eggs" />
            <h3>Meats, Fish & Eggs</h3></Link>
          </div>

          <div className="categories__item">
            <Link to="/snacks" className="categories__item"> 
            <img src="https://evolvesnacks.com/cdn/shop/products/corntriangularchips.jpg?v=1633781208" alt="Snacks & Munchies" />
            <h3>Snacks & Munchies</h3></Link>
          </div>

          <div className="categories__item">
            <Link to="/cooldrinks" className="categories__item">
            <img src="https://suhana.com/cdn/shop/articles/Garam-to-chat-500x380-2.png?v=1709544704" alt="Cool drinks" />
            <h3>Cool Drinks</h3></Link>
          </div>

          <div className="categories__item">
            <Link to="/breakfast" className="categories__item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEvlxmcKfvzNL2CigvxOJhxjIXq6eXmSWt3w&s" alt="Breakfast" />
            <h3>Breakfast & Snacks</h3></Link>
          </div>
        </div>
      </section>

      <section className="title">
        <h1>Snacks & Drinks</h1>
        <div className="snacks">
          <div className="snacks-container">
            <Link to="/fastfood" className="snacks__item">
            <img src="https://media.istockphoto.com/id/1262304130/photo/cola-soda-glass-and-salty-snacks-shot-on-gray-table.jpg?s=612x612&w=0&k=20&c=XCj7uQNCfSKOHBzcpGlEepnrjnkmxYyzlezR9UzyGnw=" alt="Cooldrinks and snacks" />
            <h3>Snacks & Drinks</h3></Link>
          </div>

          <div className="snacks-container">
            <Link to="/tea" className="snacks__item">
            <img src="https://thecoffeeman.in/wp-content/uploads/2022/12/tea-and-coffee-combo-300x300-1.png" alt="Tea and coffee powder" />
            <h3>Tea and Coffee powder</h3></Link>
          </div>

          <div className="snacks-container">
            <Link to="/ice" className="snacks__item">
            <img src="https://thumbs.dreamstime.com/b/various-varieties-ice-cream-cones-various-varieties-ice-cream-cones-mint-blueberry-strawberry-pistachio-cherry-158155767.jpg" alt="Ice Cream" />
            <h3>Ice Cream</h3></Link>
          </div>

          <div className="snacks-container">
            <Link to="/frozen" className="snacks__item">
            <img src="https://media.istockphoto.com/id/1292299849/photo/frozen-food-in-the-freezer-frozen-vegetables-soup-ready-meals.jpg?s=612x612&w=0&k=20&c=Cv9BiDgN0W-JTth0VB4yjgExQynjsAJCJqja_E4Vq-Y=" alt="Frozen-food" />
            <h3>Frozen Food</h3></Link>
          </div>

          <div className="snacks-container">
            <Link to="/biscuits" className="snacks__item">
            <img src="https://media.istockphoto.com/id/1035053764/photo/beautiful-cookies-assorted-close-up-background-horizontal-top-view.jpg?s=612x612&w=0&k=20&c=5blbYcRKIYxN3SFGnUxY4xB9PcEaScd4-HCmyiQvcew=" alt="Biscuits" />
            <h3>Biscuits</h3></Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Adver;