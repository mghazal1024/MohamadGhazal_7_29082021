// const handleUstensilesTags = (recipeData) => {

import handleTagClose from "./handleTagClose.js";

//     const tags = [...document.querySelectorAll('.dropdown__ustensiles .tags__list li')];

//     let selectedTags = [];
//     let filteredRecipesfromTags = [];

//     tags.map( tag => {
//         tag.addEventListener('click', () => {
//             selectedTags.push(tag.innerText);


//             if(recipeData.updatedState.length > 0) {
//                 filteredRecipesfromTags = recipeData.updatedState.filter( (recipe) => {
//                     const ustensiles = () => {
//                         let ustensilesArray = [];
//                         recipe.ustensiles.map( ustensil => {
//                             ustensilesArray.push(ustensil);
//                         })
    
//                         return ustensilesArray.join(' ').toLowerCase().includes(tag.innerText.toLowerCase());
//                     }
    
//                     return (
//                         ustensiles()
//                     )
//                 })
    
//                 recipeData.updatedState = filteredRecipesfromTags;
//                 recipeData.updateRecipeList(recipeData.updatedState)
//             } else {
//                 filteredRecipesfromTags = recipeData.initialState.filter( (recipe) => {
//                     const ustensiles = () => {
//                         let ustensilesArray = [];
//                         recipe.ustensiles.map( ustensil => {
//                             ustensilesArray.push(ustensil);
//                         })
    
//                         return ustensilesArray.join(' ').toLowerCase().includes(tag.innerText.toLowerCase());
//                     }
    
//                     return (
//                         ustensiles()
//                     )
//                 })
    
//                 recipeData.updatedState = filteredRecipesfromTags;
//                 recipeData.updateRecipeList(recipeData.updatedState)
//             }
//         })
//     })
// }

// export default handleUstensilesTags


const handleUstensilesTags = (ustensilesTagElements, selectedTags) => {

    const tagsSection = document.querySelector('.tags');
    const tagsSectionUl = tagsSection.querySelector('ul');
    let tagsSectionLi = [];

    ustensilesTagElements.map( element => {
        element.addEventListener('click', () => {
            if(selectedTags.indexOf(element.innerText.toLowerCase() === -1)) {
                selectedTags.push(element.innerText.toLowerCase());
                element.classList.add('hide');

                tagsSectionUl.innerHTML +=`
                    <li class="tags--ustensiles">
                        <p>${element.innerText}</p>
                        <img src="/images/close.svg" alt="remove" />
                    </li>
                `
                console.log(selectedTags)
            }

            handleTagClose(selectedTags);
        })
    })

}


export default handleUstensilesTags