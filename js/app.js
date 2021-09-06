import LoadData from "./Api.js";
import RecipeList from './Components/RecipeList.js';
import handleSearchBar from "./Helpers/handleSearchBar.js";

LoadData().then((data) => {

    console.log(data)

    const updateData = (data, newData) => {
        data = newData;
        console.log(data);
    }

    RecipeList(data);
    handleSearchBar(data, updateData);
})