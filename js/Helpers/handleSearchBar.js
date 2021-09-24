import handleDropdown from "./handleDropdown.js";

const handleSearchBar = (recipeData) => {

    // selecting the search bar input element
    const searchBar = document.querySelector('.search-bar input');

    searchBar.addEventListener('keyup', (e) => {
        let searchString = e.target.value.toLowerCase();

        let filteredRecipes = [];

        if(recipeData.selectedTags.length > 0) {
            console.log(recipeData.selectedTags)
            recipeData.selectedTags = [];
            const tagsSectionUl = document.querySelector('.tags ul');
            tagsSectionUl.innerHTML = ""
        }

        if( searchString.length > 2 ) {
            for( let i = 0; i < recipeData.initialState.length; i++) {
                let ingredientArray = [];
                let ingredients = recipeData.initialState[i].ingredients;
                let name = recipeData.initialState[i].name;
                let description = recipeData.initialState[i].description;

                for( let j = 0; j < ingredients.length; j++) {
                    ingredientArray.push(ingredients[j].ingredient)
                }
                console.log(ingredientArray.join(' ').toLowerCase())
                if(
                    ingredientArray.join(' ').toLowerCase().includes(searchString)
                    || name.toLowerCase().includes(searchString)
                    || description.toLowerCase().includes(searchString)
                ) {
                    filteredRecipes.push(recipeData.initialState[i]);
                }
            }
            recipeData.updatedState = filteredRecipes;
            recipeData.updateRecipeList((recipeData.updatedState));
        } else {
            recipeData.updatedState = [];
            recipeData.updateRecipeList((recipeData.initialState));
            handleDropdown();
        }

    })

}

export default handleSearchBar