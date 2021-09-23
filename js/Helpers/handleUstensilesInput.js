const handleUstensilesInput = (ustensilesTagElements) => {

    const ustensilesInput = document.querySelector('.dropdown__ustensiles input');
    // const ustensilesElement = [...ustensilesTagList.querySelectorAll('.tags__list-item')];

    ustensilesInput.addEventListener('keyup', (e) => {

        let searchString = e.target.value.toLowerCase();
        console.log(searchString)
        ustensilesTagElements.map( ustensil => {
            if(!ustensil.innerText.toLowerCase().includes(searchString)) {
                ustensil.classList.add('hide');
            } else {
                ustensil.classList.remove('hide');
            }
        })
    })

}

export default handleUstensilesInput