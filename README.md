# Recipe Gallery (React + Vite)

## Project Description
This project is a simple Recipe Gallery built using React and Vite. 
The application displays recipes in a card layout. Each card shows a recipe title, image, and a list of ingredients.

This project demonstrates:
- React components
- Rendering lists using the JavaScript .map() function
- Using key props in React
- Basic CSS styling
- Building a React application using Vite

---

## Features

- Displays multiple recipes
- Each recipe includes:
  - Image
  - Title
  - Ingredients list
- Responsive card layout
- Recipes rendered dynamically using .map()

---

## Technologies Used

- React
- Vite
- JavaScript
- CSS

---

## Project Structure

src
 ├── App.jsx
 ├── RecipeGallery.jsx
 ├── RecipeGallery.css
 └── main.jsx

App.jsx – Main application component that renders the gallery  
RecipeGallery.jsx – Component that displays the recipe gallery  
RecipeGallery.css – Styling for recipe cards and layout  
main.jsx – Entry point of the React application

---

## How to Run the Project

1. Clone the repository

git clone https://github.com/Bustervro/Building-a-Recipe-Gallery-in-React.git

2. Navigate to the project folder

cd recipe-gallery

3. Install dependencies

npm install

4. Start the development server

npm run dev

Then open your browser and go to:

http://localhost:5173

---

## Test Cases

Normal Cases

1. The page loads and shows the title "Recipe Gallery".
2. Multiple recipe cards appear on the screen.
3. Each recipe card displays an image, title, and ingredients list.

Edge Cases

1. If the recipe array is empty, no cards appear.
2. If a recipe has no ingredients, the card still renders.
3. If an image fails to load, the recipe title and ingredients still appear.

---

## Author

Aden Osman
