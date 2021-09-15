const UstensilesTags = (recipeData) => {

    const ustensilesTagList = document.querySelector('.dropdown__ustensiles .tags__list');

    let allUstensiles = [];

    ustensilesTagList.innerHTML = "";

    recipeData.map(recipe => {
        recipe.ustensiles.map( ustensil => {
            allUstensiles.push(ustensil);
        })
    })

    let uniqueUstensiles = [...new Set(allUstensiles)];

    uniqueUstensiles.map( unique => {
        ustensilesTagList.innerHTML += `<li>${unique}</li>`
    })

}

export default UstensilesTags