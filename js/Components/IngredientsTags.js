import handleTagsSearch from "../Helpers/handleTagsSearch.js";

const IngredientsTags = (recipeData) => {

    const ingredientsTagList = document.querySelector('.dropdown__ingredients .tags__list');

    let allIngredients = [];

    ingredientsTagList.innerHTML = "";

    recipeData.map( recipe => {
        recipe.ingredients.map( ingredient => {
            allIngredients.push(ingredient.ingredient);
        })
    })

    let uniqueIngredients = [...new Set(allIngredients)];

    uniqueIngredients.map( unique => {
        ingredientsTagList.innerHTML += `<li>${unique}</li>`;
    })

    // handleTagsSearch( recipeData, ingredientsTagList);
}

export default IngredientsTags
