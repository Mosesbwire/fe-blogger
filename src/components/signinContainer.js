import { createElement } from "../javascript/utility";

function container (){
    let signinContainer = createElement('div', {class: 'signin-container'})
    let signinWrapper = createElement('div', {class: 'signin-wrapper'})

    signinContainer.append(signinWrapper)

    return signinContainer
}


export {
    container
}
