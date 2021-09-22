// const AppareilTags = (recipeData) => {

import handleAppareilTags from "../Helpers/handleAppareilTags.js";
import handleDropdown from "../Helpers/handleDropdown.js";

//     const appareilTagList = document.querySelector('.dropdown__appareil .tags__list');

//     let allAppareils = [];

//     appareilTagList.innerHTML = "";

//     recipeData.map(recipe => {
//         allAppareils.push(recipe.appliance);
//     })

//     let uniqueAppareil = [...new Set(allAppareils)];
//     // console.log(uniqueAppareil)

//     uniqueAppareil.map( unique => {
//         appareilTagList.innerHTML += `<li>${unique}</li>`
//     })

//     // handleTagsSearch( recipeData, appareilTagList);

// }

// export default AppareilTags


const AppareilTags = (data, selectedTags) => {

    const appareilsTagList = document.querySelector('.dropdown__appareil .tags__list');

    let allAppareils = [];

    appareilsTagList.innerHTML = "";

    data.map( recipe => {
        allAppareils.push(recipe.appliance)
    })

    let uniqueAppareil = [...new Set(allAppareils)];

    uniqueAppareil.map( unique => {
        appareilsTagList.innerHTML += `<li class="tags__list-item">${unique}</li>`
    })

    // handleAppareilTags(recipeData)
    // handleDropdown();
}


export default AppareilTags