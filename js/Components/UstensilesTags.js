const UstensilesTags = (data, selectedTags) => {

    const ustensilesTagList = document.querySelector('.dropdown__ustensiles .tags__list');

    let allUstensiles = [];

    ustensilesTagList.innerHTML = "";

    data.map(recipe => {
        recipe.ustensiles.map( ustensil => {
            allUstensiles.push(ustensil);
        })
    })

    let uniqueUstensiles = [...new Set(allUstensiles)];

    uniqueUstensiles.map( unique => {
        ustensilesTagList.innerHTML += `<li class="tags__list-item">${unique}</li>`
    })
    console.log(uniqueUstensiles)

}

export default UstensilesTags