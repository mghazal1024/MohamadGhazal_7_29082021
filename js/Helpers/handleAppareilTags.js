// const handleAppareilTags = (recipeData) => {

//     const tags = [...document.querySelectorAll('.dropdown__appareil .tags__list li')];

//     let selectedTags = [];
//     let filteredRecipesfromTags = [];

//     tags.map( tag => {
//         tag.addEventListener('click', () => {
//             selectedTags.push(tag.innerText);

//             if(recipeData.updatedState.lenght > 0) {
//                 filteredRecipesfromTags = recipeData.updatedState.filter( (recipe) => {
//                     return (
//                         recipe.appliance.toLowerCase().includes(tag.innerText.toLowerCase())
//                     )
//                 })
    
//                 recipeData.updatedState = filteredRecipesfromTags;
//                 recipeData.updateRecipeList(recipeData.updatedState)
//             } else {
//                 filteredRecipesfromTags = recipeData.initialState.filter( (recipe) => {
//                     return (
//                         recipe.appliance.toLowerCase().includes(tag.innerText.toLowerCase())
//                     )
//                 })
    
//                 recipeData.updatedState = filteredRecipesfromTags;
//                 recipeData.updateRecipeList(recipeData.updatedState)
//             }
//         })
//     })
// }

// export default handleAppareilTags



const handleAppareilTags = (recipeData) => {

    const recipesCards = [...document.querySelectorAll('.recipes-cards__list-item')];

    const tagsListSection = document.querySelector('.dropdown__appareil');
    const tagsListUl = tagsListSection.querySelector('ul.tags__list');
    const tagsListLi = [...tagsListUl.querySelectorAll('li')];

    const tagsSection = document.querySelector('.tags');
    const tagsSectionUl = tagsSection.querySelector('ul');
    let tagsSectionLi = [];

    let selectedTags = [];

    tagsListLi.map( tagLi => {
        tagLi.addEventListener('click', () => {
            if(selectedTags.indexOf(tagLi.innerText) === -1) {
                selectedTags.push(tagLi.innerText);

                tagsSectionUl.innerHTML += `
                    <li class="tags--appareil">
                        <p>${tagLi.innerText}</p>
                        <img src="/images/close.svg" alt="remove" />
                    </li>
                `

                tagLi.classList.add('hide');

                tagsSectionLi = [...tagsSectionUl.querySelectorAll('.tags--appareil')];

                recipesCards.map(recipeCard => {
                    selectedTags.map( selectedTag => {
                        if(recipeCard.getAttribute('data-appareil').toLowerCase() !== selectedTag.toLowerCase()) {
                            recipeCard.classList.add('hide');
                        } else {
                            recipeCard.classList.remove('hide');
                        }
                    })
                })

                tagsSectionLi.map( tag => {
                    const closeTag = tag.querySelector('img');

                    closeTag.addEventListener('click', () => {
                        selectedTags.splice(selectedTags.indexOf(tagLi.innerText, 1));
                        closeTag.parentElement.classList.add('hide');

                        tagLi.classList.remove('hide');

                        recipesCards.map( recipeCard => {
                            if(selectedTags.length > 0) {
                                selectedTags.map ( selectedTag => {
                                    if(!recipeCard.getAttribute('data-appareil').toLowerCase() !== selectedTag.toLowerCase()) {
                                        recipeCard.classList.add('hide');
                                    } else {
                                        recipeCard.classList.remove('hide');
                                    }
                                })
                            } else {
                                recipeCard.classList.remove('hide');
                            }
                        })
                    })
                })
            }
        })
    })
}

export default handleAppareilTags