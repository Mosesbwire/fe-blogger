function createElement(type, attrs = {}){
    const element = document.createElement(type)
    for(let attr in attrs){
        const value = attrs[attr]
        if (attr == 'innerText'){
            element.innerText = value
        }else {
            element.setAttribute(attr,value)
        }
    }

    return element
}

function createLink(attr){
    return createElement('a', attr)
}

function createList(attr){
    return createElement('ul',attr)
}

function createListItem(attr){
    return createElement('li', attr)
}

function createButton(attr){
    return createElement('button', attr)
}




export {
    createElement,
    createLink,
    createButton,
    createListItem,
    createList
}