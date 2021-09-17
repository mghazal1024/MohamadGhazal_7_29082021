import handleDropdown from "./handleDropdown.js";

const handleIngredientsTags = (recipeData) => {

    const tags = [...document.querySelectorAll('.dropdown__ingredients .tags__list li')];
    const tagsUl = document.querySelector('.tags ul'); 
    let tagsli = [...document.querySelectorAll('.tags ul li')];

    let selectedTags = [];
    let filteredRecipesfromTags = [];
    

    // const handleCloseTag = () => {
    //     console.log('clicked')
    // }

    // tagsli.map(tagli => {
    //     const close = tagli.querySelector('img');
    //     close.addEventListener('click', () => {
    //         tagsUl.innerHTML -= tagli;
    //     })
    // })

    console.log(tags)

    tags.map(tag => {
        tag.addEventListener('click', () => {
            if(selectedTags.indexOf(tag.innerText) === -1) {
                selectedTags.push(tag.innerText);

                tagsUl.innerHTML += `
                    <li class=tags--ingredients>
                        <p>${tag.innerText}</p>
                        <img src="images/close.svg" alt="remove" />
                    </li>
                `

                console.log(selectedTags)
            console.log(recipeData.updatedState);

            console.log(tag.innerText)
            console.log(selectedTags.indexOf(tag.innerText))
            }

            // console.log(selectedTags)
            // console.log(recipeData.updatedState);

            // console.log(tag.innerText)
            // console.log(selectedTags.indexOf(tag.innerText))

            // if(selectedTags.indexOf(tag.innerText) === -1) {
            //     tagsUl.innerHTML += `
            //         <li class=tags--ingredients>
            //             <p>${tag.innerText}</p>
            //             <img src="images/close.svg" alt="remove" />
            //         </li>
            //     `
            // }

            // tagsUl.innerHTML += `
            //         <li class=tags--ingredients>
            //             <p>${tag.innerText}</p>
            //             <img src="images/close.svg" alt="remove" />
            //         </li>
            //     `
        

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
            
            // if(recipeData.updatedState.length > 0) {
            //     filteredRecipesfromTags = recipeData.updatedState.filter( (recipe) => {
            //         const ingredients = () => {
            //             let ingredientArray = [];
            //             recipe.ingredients.map( ing => {
            //                 ingredientArray.push(ing.ingredient);
            //             })
    
            //             // return those which include the query
            //             return ingredientArray.join(' ').toLowerCase().includes(tag.innerText.toLowerCase());
            //         }

            //         //returning all from name, description and ingredients
            //         return (
            //             ingredients()
            //         );
            //     })
    
            //     recipeData.updatedState = filteredRecipesfromTags;
            //     recipeData.updateRecipeList(recipeData.updatedState);
            //     // handleDropdown();
            // } else {
            //     filteredRecipesfromTags = recipeData.initialState.filter( (recipe) => {
            //         const ingredients = () => {
            //             let ingredientArray = [];
            //             recipe.ingredients.map( ing => {
            //                 ingredientArray.push(ing.ingredient);
            //             })
    
            //             // return those which include the query
            //             return ingredientArray.join(' ').toLowerCase().includes(tag.innerText.toLowerCase());
            //         }
            //         //returning all from name, description and ingredients
            //         return (
            //             ingredients()
            //         );
            //     })
    
            //     recipeData.updatedState = filteredRecipesfromTags;
            //     recipeData.updateRecipeList(recipeData.updatedState);
            //     // handleDropdown();
            // }
        })
    })

    // handleDropdown();
}

export default handleIngredientsTags