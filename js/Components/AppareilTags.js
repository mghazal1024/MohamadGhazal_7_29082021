import handleDropdownInput from "../Helpers/handleDropdownInput.js";
import handleTags from "../Helpers/handleTags.js";


// component to create the tags in the apparel list dropdown
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

    const appareilInput = document.querySelector('.dropdown__appareil input');

    handleDropdownInput(appareilInput, appareilsTagElements)
    handleTags(appareilsTagElements, selectedTags, "appareil")

}


export default AppareilTags