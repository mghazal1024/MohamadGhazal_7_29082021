import LoadData from "./Api.js";
import RecipeList from './Components/RecipeList.js';

LoadData().then((data) => {
    console.log(data);
    RecipeList(data);
})