import RecipeList from "./Components/RecipeList.js";
import IngredientsTags from "./Components/IngredientsTags.js";
import handleSearchBar from "./Helpers/handleSearchBar.js";
import AppareilTags from "./Components/AppareilTags.js";
import handleDropdown from "./Helpers/handleDropdown.js";
import UstensilesTags from "./Components/UstensilesTags.js";


let recipeData = {
    initialState: [],
    updatedState: [],
    selectedTags: [],
    updateRecipeList: (data) => {
        console.log(data);
        RecipeList(data);
        IngredientsTags(data, recipeData.selectedTags);
        AppareilTags(data, recipeData.selectedTags);
        UstensilesTags(data, recipeData.selectedTags);
    }
}


const LoadRecipes = async () => {
    try {
        const url ='json/recipesData.json';
        const result = await fetch(url);
        recipeData.initialState = await result.json();
        console.log(recipeData.initialState);
        handleSearchBar(recipeData);
        handleDropdown();
        // Loading the recipes with the initial json list
        recipeData.updateRecipeList(recipeData.initialState);
    } catch (err) {
        console.error(err)
    }
}

LoadRecipes();

