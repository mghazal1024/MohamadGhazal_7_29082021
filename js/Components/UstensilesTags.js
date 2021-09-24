import handleDropdownInput from "../Helpers/handleDropdownInput.js";
import handleTags from "../Helpers/handleTags.js";

// component to create the tags in the ustensiles list dropdown
const UstensilesTags = (data, selectedTags) => {

    const ustensilesTagList = document.querySelector('.dropdown__ustensiles .tags__list');

    let allUstensiles = [];

    ustensilesTagList.innerHTML = "";

    data.map(recipe => {
        recipe.ustensiles.map( ustensil => {
            allUstensiles.push(ustensil.toLowerCase());
        })
    })

    let uniqueUstensiles = [...new Set(allUstensiles)].sort();

    uniqueUstensiles.map( unique => {
        ustensilesTagList.innerHTML += `<li class="tags__list-item">${unique}</li>`
    })
    
    const ustensilesTagElements = [...ustensilesTagList.querySelectorAll('.tags__list-item')]

    const ustensilesInput = document.querySelector('.dropdown__ustensiles input');

    handleDropdownInput(ustensilesInput, ustensilesTagElements);
    handleTags(ustensilesTagElements, selectedTags, "ustensiles");

}

export default UstensilesTags