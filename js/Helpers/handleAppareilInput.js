const handleAppareilInput = (appareilTagList) => {

    const appareilInput = document.querySelector('.dropdown__appareil input');
    const appareilElement = [...appareilTagList.querySelectorAll('.tags__list-item')];

    appareilInput.addEventListener('keyup', (e) => {
        let searchString = e.target.value.toLowerCase();
        appareilElement.map( appareil => {
            if(!appareil.innerText.toLowerCase().includes(searchString)) {
                appareil.classList.add('hide');
            } else {
                appareil.classList.remove('hide');
            }
        })
    })
}

export default handleAppareilInput