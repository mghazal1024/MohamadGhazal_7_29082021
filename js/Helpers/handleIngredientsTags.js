import handleTagClose from "./handleTagClose.js";


const handleIngredientsTags = (ingredientsTagElements, selectedTags) => {

    const tagsSection = document.querySelector('.tags');
    const tagsSectionUl = tagsSection.querySelector('ul');

    const recipeCards = [...document.querySelectorAll('.recipes-cards__list-item')];


    ingredientsTagElements.map( element => {
        element.addEventListener('click', () => {
            if(selectedTags.indexOf(element.innerText.toLowerCase() === -1)) {
                selectedTags.push(element.innerText.toLowerCase());
                element.classList.add('hide');

                recipeCards.map( recipe => {
                   
                    const ingredients = recipe.getAttribute('data-ingredients').toLowerCase().split(', ');


                    console.log(ingredients.indexOf(element.innerText.toLowerCase()));
                    if( ingredients.indexOf(element.innerText.toLowerCase()) === -1 ) {
                        recipe.classList.add('hide');
                    }
                })


                tagsSectionUl.innerHTML +=`
                    <li class="tags--ingredients">
                        <p>${element.innerText}</p>
                        <img src="/images/close.svg" alt="remove" />
                    </li>
                `
            }

            handleTagClose(selectedTags, recipeCards);
        })


    })

}

export default handleIngredientsTags