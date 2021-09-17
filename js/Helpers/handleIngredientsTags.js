import handleDropdown from "./handleDropdown.js";

const handleIngredientsTags = (recipeData) => {

    const tagsListSection = document.querySelector('.dropdown__ingredients')
    const tagsListUl = tagsListSection.querySelector('ul');
    const tagsListLi = [...tagsListUl.querySelectorAll('li')];

    const tagsSection = document.querySelector('.tags');
    const tagsSectionUl = tagsSection.querySelector('ul');
    
    let tagsSectionLi = [];
    let selectedTags = [];



    tagsListLi.map (tagLi => {
        tagLi.addEventListener('click', () => {
            console.log(tagLi.innerText)
            if(selectedTags.indexOf(tagLi.innerText) === -1) {
                selectedTags.push(tagLi.innerText);
                tagsSectionUl.innerHTML += `
                <li class="tags--ingredients">
                    <p>${tagLi.innerText}</p>
                    <img src="/images/close.svg" alt="remove" />
                </li>
                `
                tagLi.style.display = "none";

                tagsSectionLi = [...tagsSectionUl.querySelectorAll('.tags--ingredients')];

                tagsSectionLi.map( tag => {
                    console.log(tag)
                    const close = tag.querySelector('img');
                    const tagP = tag.querySelector('p');

                    close.addEventListener('click', () => {
                        // tagsSectionUl.innerHTML -= tag;
                        tagsSectionLi.map( tagToDelete => {
                            const p = tagToDelete.querySelector('p');
                            if( p.innerText.toLowerCase() === tagP.innerText.toLowerCase()) {
                                tagToDelete.style.display = 'none';
                            }
                        })
                        
                        tagLi.style.display = 'flex';
                        selectedTags.splice(selectedTags.indexOf(tagLi.innerText), 1);
                    })
                })


                
            }
            console.log(selectedTags)
        })
    })

    

    tagsSectionLi.map( tagSectionLi => {
        const close = tagSectionLi.querySelector('img');
        close.addEventListener('click', () => {
            console.log('close')
        })
    })

    // const tags = [...document.querySelectorAll('.dropdown__ingredients .tags__list li')];
    // const tagsUl = document.querySelector('.tags ul'); 
    // let tagsli = [...document.querySelectorAll('.tags ul li')];



    // let selectedTags = [];
    // let filteredRecipesfromTags = [];


    // tags.map(tag => {
    //     const close = tag.querySelector('img');

    //     tag.addEventListener('click', () => {
    //         selectedTags.push(tag.innerText);
    //         console.log(selectedTags.indexOf(tag))

        
            

            
    //         // if(recipeData.updatedState.length > 0) {
    //         //     filteredRecipesfromTags = recipeData.updatedState.filter( (recipe) => {
    //         //         const ingredients = () => {
    //         //             let ingredientArray = [];
    //         //             recipe.ingredients.map( ing => {
    //         //                 ingredientArray.push(ing.ingredient);
    //         //             })
    
    //         //             // return those which include the query
    //         //             return ingredientArray.join(' ').toLowerCase().includes(tag.innerText.toLowerCase());
    //         //         }

    //         //         //returning all from name, description and ingredients
    //         //         return (
    //         //             ingredients()
    //         //         );
    //         //     })
    
    //         //     recipeData.updatedState = filteredRecipesfromTags;
    //         //     recipeData.updateRecipeList(recipeData.updatedState);
    //         //     // handleDropdown();
    //         // } else {
    //         //     filteredRecipesfromTags = recipeData.initialState.filter( (recipe) => {
    //         //         const ingredients = () => {
    //         //             let ingredientArray = [];
    //         //             recipe.ingredients.map( ing => {
    //         //                 ingredientArray.push(ing.ingredient);
    //         //             })
    
    //         //             // return those which include the query
    //         //             return ingredientArray.join(' ').toLowerCase().includes(tag.innerText.toLowerCase());
    //         //         }
    //         //         //returning all from name, description and ingredients
    //         //         return (
    //         //             ingredients()
    //         //         );
    //         //     })
    
    //         //     recipeData.updatedState = filteredRecipesfromTags;
    //         //     recipeData.updateRecipeList(recipeData.updatedState);
    //         //     // handleDropdown();
    //         // }
    //     })
        
    // })

    // handleDropdown();
}

export default handleIngredientsTags




            // if(selectedTags.indexOf(tag.innerText) === -1) {
            //     // selectedTags.push(tag.innerText);

            //     tagsUl.innerHTML += `
            //         <li class=tags--ingredients>
            //             <p>${tag.innerText}</p>
            //             <img src="images/close.svg" alt="remove" />
            //         </li>
            //     `

            //     // tag.style.display ="none";
            //     console.log(selectedTags)
            // console.log(recipeData.updatedState);

            // console.log(tag.innerText)
            // console.log(selectedTags.indexOf(tag.innerText))
            // }

            

            // if(recipeData.updatedState.lenght > 0) {
                
            //     selectedTags.map( selectedTag => {
            //         let recipes = recipeData.updatedState.filter( (recipe) => {
            //             const ingredients = () => {
            //                 let ingredientArray = [];
            //                 recipe.ingredients.map( ing => {
            //                     ingredientArray.push(ing.ingredient);
            //                 })

            //                 return ingredientArray.join(' ').toLowerCase().includes(selectedTag.toLowerCase());
            //             }
            //             return ingredients();
            //         })
            //         filteredRecipesfromTags.push(...recipes);

            //         recipeData.updatedState = filteredRecipesfromTags;
            //         recipeData.updateRecipeList(recipeData.updatedState);
            //     })
            // } else {
            //     selectedTags.map( selectedTag => {
            //         let recipes = recipeData.initialState.filter( (recipe) => {
            //             const ingredients = () => {
            //                 let ingredientArray = [];
            //                 recipe.ingredients.map( ing => {
            //                     ingredientArray.push(ing.ingredient);
            //                 })

            //                 return ingredientArray.join(' ').toLowerCase().includes(selectedTag.toLowerCase());
            //             }
            //             return ingredients();
            //         })
            //         filteredRecipesfromTags.push(...recipes);

            //         recipeData.updatedState = filteredRecipesfromTags;
            //         recipeData.updateRecipeList(recipeData.updatedState);
            //     })
            // }