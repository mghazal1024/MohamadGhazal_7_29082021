const handleDropdownInput = (input, tagElements) => {

    input.addEventListener( 'keyup', (e) => {
        let searchString = e.target.value.toLowerCase();
        tagElements.map( element => {
            if(!element.innerText.toLowerCase().includes(searchString)) {
                element.classList.add('hide');
            } else {
                element.classList.remove('hide');
            }
        })
    })
    
}

export default handleDropdownInput