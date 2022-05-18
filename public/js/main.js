const name = [
    {
        name: 'chu ngoc binh',
    },
    {
        name: 'chu ngoc thai',
    },
    {
        name: 'chu ngoc minh',
    }
]

const listName = document.querySelector('.list-name');

const xhtml = name.map(item => {
    return `<li> ${item.name}</li>`
})
listName.innerHTML = xhtml.join('')s