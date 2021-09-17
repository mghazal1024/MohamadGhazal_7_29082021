import handleDropdown from "../Helpers/handleDropdown.js";
import handleIngredientsTags from "../Helpers/handleIngredientsTags.js";

const IngredientsTags = (data, recipeData) => {

    const ingredientsTagList = document.querySelector('.dropdown__ingredients .tags__list');

    let allIngredients = [];

    ingredientsTagList.innerHTML = "";

    data.map( recipe => {
        recipe.ingredients.map( ingredient => {
            allIngredients.push(ingredient.ingredient);
        })
    })

    let uniqueIngredients = [...new Set(allIngredients)];

    uniqueIngredients.map( unique => {
        ingredientsTagList.innerHTML += `<li>${unique}</li>`;
    })

    handleIngredientsTags(recipeData);
    handleDropdown();

    // console.log(selectedTags)

}

export default IngredientsTags
