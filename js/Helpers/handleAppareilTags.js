// // const handleAppareilTags = (recipeData) => {

import handleTagClose from "./handleTagClose.js";

const handleAppareilTags = (appareilsTagElements, selectedTags) => {

    const tagsSection = document.querySelector('.tags');
    const tagsSectionUl = tagsSection.querySelector('ul');

    const recipeCards = [...document.querySelectorAll('.recipes-cards__list-item')];


    appareilsTagElements.map( element => {
        element.addEventListener('click', () => {
            if(selectedTags.indexOf(element.innerText.toLowerCase() === -1)) {
                selectedTags.push(element.innerText.toLowerCase());
                element.classList.add('hide');

                recipeCards.map( recipe => {

                    const appareil = recipe.getAttribute('data-appareil').toLowerCase().split(', ');

                    if( appareil.indexOf(element.innerText.toLowerCase()) === -1) {
                        recipe.classList.add('hide');
                    }
                })

                tagsSectionUl.innerHTML +=`
                    <li class="tags--appareil">
                        <p>${element.innerText}</p>
                        <img src="/images/close.svg" alt="remove" />
                    </li>
                `
            }
            handleTagClose(selectedTags, recipeCards)
        })

    })
}

export default handleAppareilTags