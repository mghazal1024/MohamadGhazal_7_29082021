
const RecipeCard = (name, description, ingredients, time) => {


    let recipeCard = `
        <li class="recipes-cards__list-item">
            <div class="image-placeholder"></div>
            <div class="recipe__info">
                <div class="recipe__header">
                    <p class="title-text">${name}</p>
                    <div class="time">
                        <img src="/images/time.svg" alt="time"/>
                        <p>${time} mins</p>
                    </div>
                </div>
                <div class="recipe__body">
                    <ul class="recipe__body-ingredients">
                        ${ingredients.map( ingredient => {
                            if(ingredient.quantity) {
                                return (
                                    `<li><p>${ingredient.ingredient}: <span>${ingredient.quantity} ${ingredient.unit}</span></p></li>`
                                )
                            } else {
                                return (
                                    `<li><p>${ingredient.ingredient}</p></li>`
                                )
                            }
                        }).join('')}
                    </ul>
                    <p class="recipe__body-description">
                        ${description.slice(0, 200)}...
                    </p>
                </div>
            </div>
        </li>
    `

    return recipeCard;

}

export default RecipeCard;