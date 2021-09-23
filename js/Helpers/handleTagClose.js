const handleTagClose = (selectedTags, recipeCards) => {

    let allTags = [...document.querySelectorAll('.tags ul li')];
    let allTagsListItems = [...document.querySelectorAll('.tags__list-item')];
    let recipeCardsNodes = [];

    allTags.map( tag => {
        const closeTag = tag.querySelector('img');
        const tagText = tag.querySelector('p');
        closeTag.addEventListener('click', () => {
            tag.remove();
            selectedTags.splice(selectedTags.indexOf(tagText.innerText.toLowerCase()), 1);
            allTagsListItems.map( listItem => {
                if(listItem.innerText.toLowerCase() === tagText.innerText.toLowerCase()) {
                    listItem.classList.remove('hide');
                }
            })
            recipeCards.map( recipe => {
                let ingredients = recipe.getAttribute('data-ingredients').toLowerCase();
                let appareil = recipe.getAttribute('data-appareil').toLowerCase();
                let ustensiles = recipe.getAttribute('data-ustensiles').toLowerCase();



                selectedTags.map( selectedTag => {
                    if ( ingredients.includes( selectedTag.toLowerCase() )
                        && !ingredients.includes(tagText.innerText.toLowerCase())) {
                        recipe.classList.remove('hide');
                    } 
                })


                if(selectedTags.length === 0) {
                    recipe.classList.remove('hide');
                }
            })

            
        })
    })
}

export default handleTagClose