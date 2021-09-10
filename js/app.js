import RecipeList from "./Components/RecipeList.js";
import IngredientsTags from "./Components/IngredientsTags.js";
import handleSearchBar from "./Helpers/handleSearchBar.js";
import AppareilTags from "./Components/AppareilTags.js";
import handleDropdown from "./Helpers/handleDropdown.js";



let recipeData = [];


const LoadRecipes = async () => {
    try {
        const url = "json/recipesData.json";
        const result = await fetch(url);
        recipeData = await result.json();
        console.log(recipeData)
        RecipeList(recipeData);
        IngredientsTags(recipeData);
        AppareilTags(recipeData);   
        handleSearchBar(recipeData);
        handleDropdown();
    } catch (err) {
        console.error(err);
    }
}

LoadRecipes();

