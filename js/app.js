import RecipeList from "./Components/RecipeList.js";
import IngredientsTags from "./Components/IngredientsTags.js";
import handleSearchBar from "./Helpers/handleSearchBar.js";
import AppareilTags from "./Components/AppareilTags.js";
import handleDropdown from "./Helpers/handleDropdown.js";
import handleTagsSearch from "./Helpers/handleTagsSearch.js";
import handleIngredientsTags from "./Helpers/handleIngredientsTags.js"
import handleAppareilTags from "./Helpers/handleAppareilTags.js";
import UstensilesTags from "./Components/UstensilesTags.js";
import handleUstensilesTags from "./Helpers/handleUstensilesTags.js";
import handleTagsFilter from "./Helpers/handleTagsFilter.js";


let recipeData = {
    initialState: [],
    updatedState: [],
    selectedTags: [],
    updateRecipeList: (data) => {
        console.log(data);
        RecipeList(data);
        // IngredientsTags(data, recipeData.selectedTags);
        // AppareilTags(data, recipeData);
        // handleDropdown();
        // handleTagsFilter(recipeData.selectedTags);
        // AppareilTags(data);
        // UstensilesTags(data);
        // handleDropdown();
        // handleIngredientsTags(recipeData);  
        // handleAppareilTags(recipeData);
        // handleUstensilesTags(recipeData);

    }
}


const LoadRecipes = async () => {
    try {
        const url ='json/recipesData.json';
        const result = await fetch(url);
        recipeData.initialState = await result.json();
        console.log(recipeData.initialState);
        handleSearchBar(recipeData);
        recipeData.updateRecipeList(recipeData.initialState);
    } catch (err) {
        console.error(err)
    }
}

LoadRecipes();

