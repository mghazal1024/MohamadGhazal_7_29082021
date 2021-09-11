import RecipeList from "./Components/RecipeList.js";
import IngredientsTags from "./Components/IngredientsTags.js";
import handleSearchBar from "./Helpers/handleSearchBar.js";
import AppareilTags from "./Components/AppareilTags.js";
import handleDropdown from "./Helpers/handleDropdown.js";
import handleTagsSearch from "./Helpers/handleTagsSearch.js";


let recipeData = {
    initialState: [],
    updatedState: [],
    updateRecipeList: (data) => {
        RecipeList(data);
        IngredientsTags(data);
        AppareilTags(data);
    }
}


// const updateRecipeList = (data) => {
//     RecipeList(data);
//     IngredientsTags(data);
//     AppareilTags(data);
// }


const LoadRecipes = async () => {
    try {
        const url ='json/recipesData.json';
        const result = await fetch(url);
        recipeData.initialState = await result.json();
        console.log(recipeData.initialState);
        recipeData.updateRecipeList(recipeData.initialState);
        handleSearchBar(recipeData);
        IngredientsTags(recipeData.initialState);
        AppareilTags(recipeData.initialState);
        handleDropdown();
    } catch (err) {
        console.error(err)
    }
}

LoadRecipes();

