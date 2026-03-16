import React from "react";
import "./RecipeGallery.css";

function RecipeGallery() {
  const recipes = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"],
      image:
        "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=800",
    },
    {
      id: 2,
      title: "Chicken Salad",
      ingredients: ["Chicken", "Lettuce", "Tomatoes", "Olive Oil"],
      image:
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800",
    },
    {
      id: 3,
      title: "Pancakes",
      ingredients: ["Flour", "Milk", "Eggs", "Butter"],
      image:
        "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800",
    },
    {
      id: 4,
      title: "Veggie Pizza",
      ingredients: ["Dough", "Tomato Sauce", "Cheese", "Vegetables"],
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
    },
  ];

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Recipe Gallery</h1>

      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <img
              src={recipe.image}
              alt={recipe.title}
              className="recipe-image"
            />
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
