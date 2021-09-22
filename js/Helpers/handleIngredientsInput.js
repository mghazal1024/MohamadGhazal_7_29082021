const handleIngredientsInput = (ingredientsTagList) => {

    const ingredientsInput = document.querySelector('.dropdown__ingredients input');
    const ingredientElement = [...ingredientsTagList.querySelectorAll('.tags__list-item')];

    ingredientsInput.addEventListener('keyup', (e) => {
        let searchString = e.target.value.toLowerCase();
        ingredientElement.map( ingredient => {
            if(!ingredient.innerText.toLowerCase().includes(searchString)) {
                ingredient.classList.add('hide');
            } else {
                ingredient.classList.remove('hide');
            }
        })
    })

}

export default handleIngredientsInput