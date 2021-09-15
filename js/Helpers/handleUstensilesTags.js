const handleUstensilesTags = (recipeData) => {

    const tags = [...document.querySelectorAll('.dropdown__ustensiles .tags__list li')];

    let selectedTags = [];
    let filteredRecipesfromTags = [];

    tags.map( tag => {
        tag.addEventListener('click', () => {
            selectedTags.push(tag.innerText);


            if(recipeData.updatedState.length > 0) {
                filteredRecipesfromTags = recipeData.updatedState.filter( (recipe) => {
                    const ustensiles = () => {
                        let ustensilesArray = [];
                        recipe.ustensiles.map( ustensil => {
                            ustensilesArray.push(ustensil);
                        })
    
                        return ustensilesArray.join(' ').toLowerCase().includes(tag.innerText.toLowerCase());
                    }
    
                    return (
                        ustensiles()
                    )
                })
    
                recipeData.updatedState = filteredRecipesfromTags;
                recipeData.updateRecipeList(recipeData.updatedState)
            } else {
                filteredRecipesfromTags = recipeData.initialState.filter( (recipe) => {
                    const ustensiles = () => {
                        let ustensilesArray = [];
                        recipe.ustensiles.map( ustensil => {
                            ustensilesArray.push(ustensil);
                        })
    
                        return ustensilesArray.join(' ').toLowerCase().includes(tag.innerText.toLowerCase());
                    }
    
                    return (
                        ustensiles()
                    )
                })
    
                recipeData.updatedState = filteredRecipesfromTags;
                recipeData.updateRecipeList(recipeData.updatedState)
            }
        })
    })
}

export default handleUstensilesTags