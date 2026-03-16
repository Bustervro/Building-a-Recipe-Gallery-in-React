import React from "react";
import "./RecipeGallery.css";

function RecipeGallery() {
  const recipes = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      ingredients: ["Pasta", "Eggs", "Parmesan Cheese", "Bacon", "Black Pepper"],
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Chicken Salad",
      ingredients: ["Chicken Breast", "Lettuce", "Tomatoes", "Cucumber", "Olive Oil"],
      image:
        "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Pancakes",
      ingredients: ["Flour", "Milk", "Eggs", "Sugar", "Butter"],
      image:
        "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Veggie Pizza",
      ingredients: ["Pizza Dough", "Mozzarella Cheese", "Bell Peppers", "Olives", "Tomato Sauce"],
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Recipe Gallery</h1>
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            <h2>{recipe.title}</h2>
            <h3>Ingredients:</h3>
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeGallery;
