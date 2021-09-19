import handleDropdown from "./handleDropdown.js";
import handleIngredientsTags from "./handleIngredientsTags.js";

const handleSearchBar = (recipeData) => {

    // recipeData.updateRecipeList(recipeData.initialState);

    // selecting the search bar input element
    const searchBar = document.querySelector('.search-bar input');

    searchBar.addEventListener('keyup', (e) => {
        let searchString = e.target.value.toLowerCase();

        let filteredRecipes = [];

        if (searchString.length > 2) {

            filteredRecipes = recipeData.initialState.filter( (recipe) => {
                const ingredients = () => {
                    let ingredientArray = [];
                    recipe.ingredients.map( ing => {
                        ingredientArray.push(ing.ingredient);
                    })

                    // return those which include the query
                    return ingredientArray.join(' ').toLowerCase().includes(searchString);
                }
                //returning all from name, description and ingredients
                return (
                    recipe.name.toLowerCase().includes(searchString)
                    || recipe.description.toLowerCase().includes(searchString)
                    || ingredients()
                );
            })
            recipeData.updatedState = filteredRecipes;
            recipeData.updateRecipeList(recipeData.updatedState);
        } else {
            recipeData.updatedState = [];
            recipeData.updateRecipeList(recipeData.initialState);
            handleDropdown();
        }

    })

}

export default handleSearchBar