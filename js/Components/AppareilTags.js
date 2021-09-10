const AppareilTags = (data) => {

    const appareilTagList = document.querySelector('.dropdown__appareil .tags__list');

    let allAppareils = [];

    appareilTagList.innerHTML = "";

    data.map(recipe => {
        allAppareils.push(recipe.appliance);
    })

    let uniqueAppareil = [...new Set(allAppareils)];

    uniqueAppareil.map( unique => {
        appareilTagList.innerHTML += `<li>${unique}</li>`
    })

}

export default AppareilTags