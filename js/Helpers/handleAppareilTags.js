const handleAppareilTags = (recipeData) => {

    const tags = [...document.querySelectorAll('.dropdown__appareil .tags__list li')];

    let selectedTags = [];
    let filteredRecipesfromTags = [];

    tags.map( tag => {
        tag.addEventListener('click', () => {
            selectedTags.push(tag.innerText);

            if(recipeData.updatedState.lenght > 0) {
                filteredRecipesfromTags = recipeData.updatedState.filter( (recipe) => {
                    return (
                        recipe.appliance.toLowerCase().includes(tag.innerText.toLowerCase())
                    )
                })
    
                recipeData.updatedState = filteredRecipesfromTags;
                recipeData.updateRecipeList(recipeData.updatedState)
            } else {
                filteredRecipesfromTags = recipeData.initialState.filter( (recipe) => {
                    return (
                        recipe.appliance.toLowerCase().includes(tag.innerText.toLowerCase())
                    )
                })
    
                recipeData.updatedState = filteredRecipesfromTags;
                recipeData.updateRecipeList(recipeData.updatedState)
            }
        })
    })
}

export default handleAppareilTags