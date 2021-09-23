// const AppareilTags = (recipeData) => {

import handleAppareilInput from "../Helpers/handleAppareilInput.js";
import handleAppareilTags from "../Helpers/handleAppareilTags.js";



const AppareilTags = (data, selectedTags) => {

    const appareilsTagList = document.querySelector('.dropdown__appareil .tags__list');

    let allAppareils = [];

    appareilsTagList.innerHTML = "";

    data.map( recipe => {
        allAppareils.push(recipe.appliance)
    })

    let uniqueAppareil = [...new Set(allAppareils)].sort();

    uniqueAppareil.map( unique => {
        appareilsTagList.innerHTML += `<li class="tags__list-item">${unique}</li>`
    })

    const appareilsTagElements = [...appareilsTagList.querySelectorAll('.tags__list-item')]

    handleAppareilInput(appareilsTagElements);
    handleAppareilTags(appareilsTagElements, selectedTags)

    // handleAppareilTags(recipeData)
    // handleDropdown();
}


export default AppareilTags