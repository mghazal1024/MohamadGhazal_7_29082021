const IngredientsTags = (data) => {

    const ingredientsTagList = document.querySelector('.dropdown__ingredients .tags__list');

    let allIngredients = [];
    ingredientsTagList.innerHTML = "";

    data.map(recipe => {
        recipe.ingredients.map( ingredient => {
            allIngredients.push(ingredient.ingredient);
        })
    })

    let uniqueIngredients = [...new Set(allIngredients)]

    console.log(ingredientsTagList)

    uniqueIngredients.map( unique => {
        ingredientsTagList.innerHTML += `<li>${unique}</li>`
    })

    

    

}

export default IngredientsTags