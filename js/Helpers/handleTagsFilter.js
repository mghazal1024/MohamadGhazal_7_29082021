const handleTagsFilter = (selectedTags) => {

    

}

export default handleTagsFilter

// const handleTagsFilter = (selectedTags) => {

//     // let selectedTags = [];

//     const allTags = [...document.querySelectorAll('.tags__list-item')];
//     console.log(allTags)
//     const recipesCards = [...document.querySelectorAll('.recipes-cards__list-item')];
//     console.log(recipesCards)

//     allTags.map( tag => {
//         tag.addEventListener('click', () => {
//             console.log(tag);
//             if(selectedTags.indexOf(tag.innerText.toLowerCase()) === -1 ) {

//                 recipesCards.map( recipeCard => {
//                     let allTagsToSearch = [];

//                     const ingredients = recipeCard.getAttribute('data-ingredients').split(', ');
//                     const appareil = recipeCard.getAttribute('data-appareil').split(', ');
//                     const ustensiles = recipeCard.getAttribute('data-ustensiles').split(', ');

//                     allTagsToSearch.push(...ingredients, ...appareil, ...ustensiles);

//                     console.log(allTagsToSearch)

//                     selectedTags.map( selectedTag => {
//                         if(!allTagsToSearch.join(', ').toLowerCase().includes( selectedTag.toLowerCase())) {
//                             recipeCard.classList.add('hide');
//                             console.log(selectedTags)
//                         } 
//                     })
                    
//                 })
                
//             }
//         })
//     })

// }

// export default handleTagsFilter