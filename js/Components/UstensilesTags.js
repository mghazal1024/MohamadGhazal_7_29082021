import handleUstensilesInput from "../Helpers/handleUstensilesInput.js";
import handleUstensilesTags from "../Helpers/handleUstensilesTags.js";

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

    handleUstensilesInput(ustensilesTagElements);
    handleUstensilesTags(ustensilesTagElements, selectedTags);

}

export default UstensilesTags