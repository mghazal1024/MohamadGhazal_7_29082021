import handleDropdownInput from "../Helpers/handleDropdownInput.js";
import handleTags from '../Helpers/handleTags.js'


// component to create the tags in the ingredients list dropdown
const IngredientsTags = (data, selectedTags) => {

    const ingredientsTagList = document.querySelector('.dropdown__ingredients .tags__list');

    let allIngredients = [];

    ingredientsTagList.innerHTML = "";

    data.map( recipe => {
        recipe.ingredients.map( ingredient => {
            allIngredients.push(ingredient.ingredient.toLowerCase());
        })
    })

    let uniqueIngredients = [...new Set(allIngredients)].sort();

    uniqueIngredients.map( unique => {
        ingredientsTagList.innerHTML += `<li class="tags__list-item">${unique}</li>`;
    })

    const ingredientsTagElements = [...ingredientsTagList.querySelectorAll('.tags__list-item')]

    const ingredientsInput = document.querySelector('.dropdown__ingredients input');

    handleDropdownInput(ingredientsInput, ingredientsTagElements);
    handleTags(ingredientsTagElements, selectedTags, "ingredients")


}

export default IngredientsTags
