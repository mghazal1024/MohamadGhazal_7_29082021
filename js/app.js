import RecipeList from "./Components/RecipeList.js";
import handleSearchBar from "./Helpers/handleSearchBar.js";


let recipeData = [];


const LoadRecipes = async () => {
    try {
        const url = "json/recipesData.json";
        const result = await fetch(url);
        recipeData = await result.json();
        console.log(recipeData)
        RecipeList(recipeData);
        handleSearchBar(recipeData);
    } catch (err) {
        console.error(err);
    }
}

LoadRecipes();

