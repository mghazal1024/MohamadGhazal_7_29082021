
const handleIngredientsTags = (recipeData) => {

    const tags = [...document.querySelectorAll('.dropdown__ingredients .tags__list li')];

    let selectedTags = [];
    let filteredRecipesfromTags = [];

    tags.map(tag => {
        tag.addEventListener('click', () => {
            selectedTags.push(tag.innerText);

            console.log(selectedTags)
            console.log(recipeData.updatedState)
            
            
            if(recipeData.updatedState.length > 0) {
                filteredRecipesfromTags = recipeData.updatedState.filter( (recipe) => {
                    const ingredients = () => {
                        let ingredientArray = [];
                        recipe.ingredients.map( ing => {
                            ingredientArray.push(ing.ingredient);
                        })
    
                        // return those which include the query
                        return ingredientArray.join(' ').toLowerCase().includes(tag.innerText.toLowerCase());
                    }
                    //returning all from name, description and ingredients
                    return (
                        ingredients()
                    );
                })
    
                recipeData.updatedState = filteredRecipesfromTags;
                recipeData.updateRecipeList(recipeData.updatedState)
            } else {
                filteredRecipesfromTags = recipeData.initialState.filter( (recipe) => {
                    const ingredients = () => {
                        let ingredientArray = [];
                        recipe.ingredients.map( ing => {
                            ingredientArray.push(ing.ingredient);
                        })
    
                        // return those which include the query
                        return ingredientArray.join(' ').toLowerCase().includes(tag.innerText.toLowerCase());
                    }
                    //returning all from name, description and ingredients
                    return (
                        ingredients()
                    );
                })
    
                recipeData.updatedState = filteredRecipesfromTags;
                recipeData.updateRecipeList(recipeData.updatedState)
            }
        })
    })
}

export default handleIngredientsTags