import RecipeCard from "./RecipeCard.js";

const RecipeList = (recipeData) => {

    const recipesSection = document.querySelector('.recipes-cards');


    const createRecipeList = () => {
        recipesSection.innerHTML = "";
        recipeData.map(recipe => {
            recipesSection.innerHTML += RecipeCard(recipe.name, recipe.description, recipe.ingredients, recipe.time, recipe.appliance, recipe.ustensiles);
        })
    }

    createRecipeList();


   
}

export default RecipeList;
