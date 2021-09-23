// const handleTagClose = (element, tagsSectionLi, selectedTags) => {

//     tagsSectionLi = [...document.querySelectorAll('.tags ul li')];

//     tagsSectionLi.map( tagLi => {
//         const closeTag = tagLi.querySelector('img');
//         const tagText = tagLi.querySelector('p');
//         closeTag.addEventListener('click', () => {
//             tagLi.remove();
//             element.classList.remove('hide');
//             selectedTags.splice(selectedTags.indexOf(tagText.innerText.toLowerCase()), 1);
//             console.log(selectedTags)
//         })
//     })
// }


const handleTagClose = (selectedTags) => {

    let allTags = [...document.querySelectorAll('.tags ul li')];
    let allTagsListItems = [...document.querySelectorAll('.tags__list-item')];

    allTags.map( tag => {
        const closeTag = tag.querySelector('img');
        const tagText = tag.querySelector('p');
        closeTag.addEventListener('click', () => {
            tag.remove();
            selectedTags.splice(selectedTags.indexOf(tagText.innerText.toLowerCase()), 1);
            allTagsListItems.map( listItem => {
                if(listItem.innerText.toLowerCase() === tagText.innerText.toLowerCase()) {
                    listItem.classList.remove('hide');
                }
            })
        })
    })
}

export default handleTagClose