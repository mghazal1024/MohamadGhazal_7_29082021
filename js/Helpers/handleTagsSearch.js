
const handleTagsSearch = (recipeData, dropdown) => {
    
    const tags = [...dropdown.querySelectorAll('li')];

    console.log(tags)

    let selectedTags = [];
    let filteredRecipesfromTags = [];

    tags.map(tag => {
        tag.addEventListener('click', () => {
            selectedTags.push(tag.innerText);

            console.log(selectedTags)

            filteredRecipesfromTags = recipeData.filter( (recipe) => {

                const ingredients = () => {
                    let allIngredients = [];
                    recipe.ingredients.map(ing => {
                        allIngredients.push(ing.ingredient);
                    })
                    return allIngredients.join(' ').toLowerCase().includes(tag.innerText.toLowerCase());
                }
                return (
                    ingredients()
                )
            })

            console.log(filteredRecipesfromTags)
            recipeData.updatedState = filteredRecipesfromTags;
            console.log(recipeData)
            // recipeData.updateRecipeList(recipeData.updatedState);
        })
    })
}

export default handleTagsSearch