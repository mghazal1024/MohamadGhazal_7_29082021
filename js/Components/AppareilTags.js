import handleTagsSearch from "../Helpers/handleTagsSearch.js";

const AppareilTags = (recipeData) => {

    const appareilTagList = document.querySelector('.dropdown__appareil .tags__list');

    let allAppareils = [];

    appareilTagList.innerHTML = "";

    recipeData.map(recipe => {
        allAppareils.push(recipe.appliance);
    })

    let uniqueAppareil = [...new Set(allAppareils)];
    console.log(uniqueAppareil)

    uniqueAppareil.map( unique => {
        appareilTagList.innerHTML += `<li>${unique}</li>`
    })

    handleTagsSearch( recipeData, appareilTagList);

}

export default AppareilTags

