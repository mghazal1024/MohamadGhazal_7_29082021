import RecipeCard from "./RecipeCard.js";

const RecipeList = (data) => {
    console.log(data)

    const recipesSection = document.querySelector('.recipes-cards');

    console.log(recipesSection)

    const createRecipeList = () => {
        data.map(recipe => {
            recipesSection.innerHTML += RecipeCard(recipe.name, recipe.description, recipe.ingredients, recipe.time);
        })
    }

    createRecipeList();

   
}

export default RecipeList;
