const handleAppareilInput = (appareilsTagElements) => {

    const appareilInput = document.querySelector('.dropdown__appareil input');

    appareilInput.addEventListener('keyup', (e) => {
        let searchString = e.target.value.toLowerCase();
        appareilsTagElements.map( appareil => {
            if(!appareil.innerText.toLowerCase().includes(searchString)) {
                appareil.classList.add('hide');
            } else {
                appareil.classList.remove('hide');
            }
        })
    })
}

export default handleAppareilInput