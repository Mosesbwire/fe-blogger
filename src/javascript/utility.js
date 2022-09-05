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




export {
    createElement
}