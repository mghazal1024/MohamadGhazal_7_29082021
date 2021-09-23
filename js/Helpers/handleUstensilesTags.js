import handleTagClose from "./handleTagClose.js";


const handleUstensilesTags = (ustensilesTagElements, selectedTags) => {


    const tagsSection = document.querySelector('.tags');
    const tagsSectionUl = tagsSection.querySelector('ul');

    const recipeCards = [...document.querySelectorAll('.recipes-cards__list-item')];

    ustensilesTagElements.map( element => {
        element.addEventListener('click', () => {
            if(selectedTags.indexOf(element.innerText.toLowerCase() === -1)) {
                selectedTags.push(element.innerText.toLowerCase());
                element.classList.add('hide');

                recipeCards.map( recipe => {
                   
                    const ustensiles = recipe.getAttribute('data-ustensiles').toLowerCase().split(', ');


                    console.log(ustensiles.indexOf(element.innerText.toLowerCase()));
                    if( ustensiles.indexOf(element.innerText.toLowerCase()) === -1 ) {
                        recipe.classList.add('hide');
                    }
                })

                tagsSectionUl.innerHTML +=`
                    <li class="tags--ustensiles">
                        <p>${element.innerText}</p>
                        <img src="/images/close.svg" alt="remove" />
                    </li>
                `
                console.log(selectedTags)
            }

            handleTagClose(selectedTags, recipeCards);
        })
    })

}


export default handleUstensilesTags