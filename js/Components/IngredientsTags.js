// import handleDropdown from "../Helpers/handleDropdown.js";
import handleIngredientsTags from "../Helpers/handleIngredientsTags.js";

const IngredientsTags = (data, selectedTags) => {

    const ingredientsTagList = document.querySelector('.dropdown__ingredients .tags__list');

    let allIngredients = [];

    ingredientsTagList.innerHTML = "";

    data.map( recipe => {
        recipe.ingredients.map( ingredient => {
            allIngredients.push(ingredient.ingredient.toLowerCase());
        })
    })

    let uniqueIngredients = [...new Set(allIngredients)];

    uniqueIngredients.map( unique => {
        ingredientsTagList.innerHTML += `<li class="tags__list-item">${unique}</li>`;
    })

    // handleIngredientsTags(selectedTags);
    // handleDropdown();

    // console.log(selectedTags)

}

export default IngredientsTags
