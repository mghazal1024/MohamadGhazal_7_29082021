const handleUstensilesInput = (ustensilesTagElements) => {

    const ustensilesInput = document.querySelector('.dropdown__ustensiles input');

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