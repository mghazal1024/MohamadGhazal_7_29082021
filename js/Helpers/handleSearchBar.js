

const handleSearchBar = (data) => {
    const searchBar = document.querySelector('.search-bar input');
    const recipeTitleElement = [...document.querySelectorAll('.title-text')];

    let newData = []

    searchBar.addEventListener('keyup', (e) => {

        if(e.target.value.split('').length >= 3) {
            newData = data.filter(d => d.name.toLowerCase().includes(e.target.value));
            console.log(newData);
        }
        

    })

}

export default handleSearchBar;

