// import LoadData from "./Api.js";
// import RecipeList from './Components/RecipeList.js';
// import handleSearchBar from "./Helpers/handleSearchBar.js";

import RecipeList from "./Components/RecipeList.js";

// const searchBar = document.querySelector('.search-bar input');

// let data = [];

// LoadData().then((data) => {

//     console.log(data)

//     RecipeList(data);
//     handleSearchBar(data);
// })

// LoadData();

// searchBar.addEventListener('keyup', (e) => {
//     console.log(e.target.value)
//     console.log(data)
//     const filteredRecipes = data.filter( d => {
//         return d.name.toLowerCase().includes(e.target.value);
//     })
//     console.log(filteredRecipes)
// })


const recipesSection = document.querySelector('.recipes-cards');
const searchBar = document.querySelector('.search-bar input');
let recipeData = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredRecipes = recipeData.filter( (recipe) => {
        return (
            recipe.name.toLowerCase().includes(searchString)
        );
    });

    // console.log(filteredRecipes)
    RecipeList(filteredRecipes);
});

const LoadRecipes = async () => {
    try {
        const url = "json/recipesData.json";
        const result = await fetch(url);
        recipeData = await result.json();
        console.log(recipeData)
        RecipeList(recipeData);
    } catch (err) {
        console.error(err);
    }
}

LoadRecipes()
