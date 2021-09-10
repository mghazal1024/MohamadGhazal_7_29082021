import RecipeList from "../Components/RecipeList.js";

const handleTagsSearch = (data, drowdown) => {

    const tags = [...drowdown.querySelectorAll('li')];

    console.log(tags)

    let selectedTags = [];
    let filteredRecipesFromTags = [];

    tags.map(tag => {
        tag.addEventListener('click', () => {
            selectedTags.push(tag.innerText);


            filteredRecipesFromTags = data.filter( (recipe) => {

                const ingredients = () => {
                    let allIngredients = [];
                    recipe.ingredients.map( ing => {
                        allIngredients.push(ing.ingredient);
                    })
                    return allIngredients.join(' ').toLowerCase().includes(tag.innerText.toLowerCase());
                }

                return (
                    ingredients()
                )

            })
            console.log(filteredRecipesFromTags)
            RecipeList(filteredRecipesFromTags);
        })

        
    })


}

export default handleTagsSearch