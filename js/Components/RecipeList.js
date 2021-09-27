import RecipeCard from "./RecipeCard.js";

// Component that creates the recipe cards list
const RecipeList = (recipeData) => {

    const recipesSection = document.querySelector('.recipes-cards');


    const createRecipeList = () => {
        // recipesSection.innerHTML = "";
        // recipeData.map(recipe => {
        //     recipesSection.innerHTML += RecipeCard(recipe.name, recipe.description, recipe.ingredients, recipe.time, recipe.appliance, recipe.ustensiles);
        // })

        if(recipeData.length > 0) {
            recipesSection.innerHTML = "";
            recipeData.map(recipe => {
                recipesSection.innerHTML += RecipeCard(recipe.name, recipe.description, recipe.ingredients, recipe.time, recipe.appliance, recipe.ustensiles);
            })
        } else {
            recipesSection.innerHTML = `
                <div class="recipes-cards__no-results">
                    <p>Aucune Résultats</p>
                </div>
            `
        }

        
    }

    createRecipeList();


   
}

export default RecipeList;
