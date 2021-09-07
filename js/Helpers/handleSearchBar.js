import RecipeList from "../Components/RecipeList.js";

const handleSearchBar = (recipeData) => {

    const searchBar = document.querySelector('.search-bar input');

    searchBar.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();

        let filteredRecipes = [];

        if (searchString.length >= 3){
            filteredRecipes = recipeData.filter( (recipe) => {

                const ingredients = () => {
                    let ingredientArray = [];
                    recipe.ingredients.map( ing => {
                        ingredientArray.push(ing.ingredient);
                    })
                    return ingredientArray.join(' ').toLowerCase().includes(searchString);
                }
                
                return (
                    recipe.name.toLowerCase().includes(searchString)
                    || recipe.description.toLowerCase().includes(searchString)
                    || ingredients()
                );
            });
            RecipeList(filteredRecipes);
        } else {
            RecipeList(recipeData);
        }
        
    });

}

export default handleSearchBar;

