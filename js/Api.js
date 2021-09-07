import RecipeList from "./Components/RecipeList.js";
import handleSearchBar from "./Helpers/handleSearchBar.js";

// Load data
const LoadData = async () => {
    try {
        const url = "json/recipesData.json";
        const result = await fetch(url);
        // const data = await result.json();
        data = await result.json();
        RecipeList(data);
        // return data;
    } catch (err) {
        console.error(err)
    }
}

export default LoadData;