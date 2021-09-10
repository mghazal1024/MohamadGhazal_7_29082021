const handleDropdown = () => {

    const ingredientsDropdown = document.querySelector('.dropdown__ingredients');
    const appareilDropdown = document.querySelector('.dropdown__appareil');
    const ustensilesDropdown = document.querySelector('.dropdown__ustensiles');

    const dropdownElements = [ingredientsDropdown, appareilDropdown, ustensilesDropdown]

    const handleChevronClick = (dropdown) => {
        const chevron = dropdown.querySelector('.tags-chevron');
        chevron.addEventListener('click', () => {
            
            // dropdownElements.map(drop => {
            //     drop.classList.remove('opened')
            // })
            
            dropdown.classList.toggle('opened');
        })
    }

    const handleInputClick = (dropdown) => {
        const input = dropdown.querySelector('input');
        input.addEventListener('click', () => {
            // dropdownElements.map(drop => {
            //     drop.classList.remove('opened')
            // })
            
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