import RecipeCard from "./RecipeCard.js";

const RecipeList = (data) => {

    const recipesSection = document.querySelector('.recipes-cards');


    const createRecipeList = () => {
        recipesSection.innerHTML = "";
        data.map(recipe => {
            recipesSection.innerHTML += RecipeCard(recipe.name, recipe.description, recipe.ingredients, recipe.time);
        })
    }

    createRecipeList();

   
}

export default RecipeList;
