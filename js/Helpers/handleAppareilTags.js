// // const handleAppareilTags = (recipeData) => {

import handleTagClose from "./handleTagClose.js";
const handleAppareilTags = (appareilsTagElements, selectedTags) => {

    const tagsSection = document.querySelector('.tags');
    const tagsSectionUl = tagsSection.querySelector('ul');
    let tagsSectionLi = [];

    appareilsTagElements.map( element => {
        element.addEventListener('click', () => {
            if(selectedTags.indexOf(element.innerText.toLowerCase() === -1)) {
                selectedTags.push(element.innerText.toLowerCase());
                element.classList.add('hide');

                tagsSectionUl.innerHTML +=`
                    <li class="tags--appareil">
                        <p>${element.innerText}</p>
                        <img src="/images/close.svg" alt="remove" />
                    </li>
                `

                console.log(selectedTags)
            }
            handleTagClose(selectedTags)
        })

    })
}

export default handleAppareilTags