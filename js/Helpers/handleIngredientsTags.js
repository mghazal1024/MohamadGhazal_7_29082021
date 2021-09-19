const handleIngredientsTags = (selectedTags) => {

    const recipesCards = [...document.querySelectorAll('.recipes-cards__list-item')];

    const tagsListSection = document.querySelector('.dropdown__ingredients');
    const tagsListUl = tagsListSection.querySelector('ul.tags__list');
    const tagsListLi = [...tagsListUl.querySelectorAll('li')];

    const tagsSection = document.querySelector('.tags');
    const tagsSectionUl = tagsSection.querySelector('ul');
    let tagsSectionLi = [];


    tagsListLi.map( tagLi => {
        tagLi.addEventListener('click', () => {
            if(selectedTags.indexOf(tagLi.innerText.toLowerCase()) === -1) {
                // selectedTags.push(tagLi.innerText);
                selectedTags.push(tagLi.innerText.toLowerCase());
                console.log(selectedTags)

                tagsSectionUl.innerHTML +=`
                    <li class="tags--ingredients">
                        <p>${tagLi.innerText}</p>
                        <img src="/images/close.svg" alt="remove" />
                    </li>
                `
                

                tagLi.classList.add('hide');

                recipesCards.map( recipeCard => {

                    console.log(recipeCard.getAttribute('data-ingredients'))

                    if(!recipeCard.getAttribute('data-ingredients').toLowerCase().includes(tagLi.innerText.toLowerCase())) {
                        recipeCard.classList.add('hide');
                    }

                    
                })

                tagsSectionLi = [...tagsSectionUl.querySelectorAll('.tags--ingredients')];
                tagsSectionLi.map( tag => {
                    const closeTag = tag.querySelector('img');
                    const tagText = tag.querySelector('p')
                    
                    closeTag.addEventListener('click', () => {

                        selectedTags.splice(selectedTags.indexOf(tagText.innerText.toLowerCase()), 1);
                        closeTag.parentElement.classList.add('hide');
                        
                        tagsListLi.map( tagListLi => {
                            if(tagListLi.innerText.toLowerCase() === tagText.innerText.toLowerCase()) {
                                tagListLi.classList.remove('hide')
                            }
                        })

                        recipesCards.map( recipeCard => {

                            if(recipeCard.classList.contains('hide') && !recipeCard.getAttribute('data-ingredients').toLowerCase().includes(tagText.innerText.toLowerCase())) {
                                recipeCard.classList.remove('hide');
                            }
                        })


                    })
                })
            }
        })
    })


}

export default handleIngredientsTags