const handleDropdown = () => {

    const ingredientsDropdown = document.querySelector('.dropdown__ingredients');
    const appareilDropdown = document.querySelector('.dropdown__appareil');
    const ustensilesDropdown = document.querySelector('.dropdown__ustensiles');


    const handleChevronClick = (dropdown) => {
        const chevron = dropdown.querySelector('.tags-chevron');
        chevron.addEventListener('click', () => {
            
            dropdown.classList.toggle('opened');
            console.log('click')
        })
    }

    const handleInputClick = (dropdown) => {
        const input = dropdown.querySelector('input');
        input.addEventListener('click', () => {
            
            dropdown.classList.toggle('opened');
        })
    }

    handleChevronClick(ingredientsDropdown);
    handleChevronClick(appareilDropdown);
    handleChevronClick(ustensilesDropdown);

    handleInputClick(ingredientsDropdown);
    handleInputClick(appareilDropdown);
    handleInputClick(ustensilesDropdown);

}

export default handleDropdown