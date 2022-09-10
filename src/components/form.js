import { createElement } from "../javascript/utility";

function form(attr, elements){
    let form = createElement('form', attr)

    elements.forEach(element => {
        form.appendChild(element)
    });
    return form
}

export {
    form
}