import AppareilTags from "../Components/AppareilTags.js";
import IngredientsTags from "../Components/IngredientsTags.js";
import RecipeList from "../Components/RecipeList.js";

const handleSearchBar = (recipeData) => {

    // selecting the search bar input element
    const searchBar = document.querySelector('.search-bar input');

    // listen for minimum 3 characters in the search bar
    searchBar.addEventListener('keyup', (e) => {

        
        const searchString = e.target.value.toLowerCase();

        //empty array to hold filtered data
        let filteredRecipes = [];


        if (searchString.length >= 3){

            //filtering the data to include search query
            filteredRecipes = recipeData.filter( (recipe) => {

                //maping over all recipes ingredients for the ones which match the query
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
            });
            RecipeList(filteredRecipes);
            IngredientsTags(filteredRecipes);
            AppareilTags(filteredRecipes);
        } else {
            RecipeList(recipeData);
            IngredientsTags(recipeData);
            AppareilTags(recipeData);
        }
        
    });

}

export default handleSearchBar;

