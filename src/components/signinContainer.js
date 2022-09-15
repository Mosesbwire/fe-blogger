import { createElement } from "../javascript/utility";

function container (){
    let signinContainer = createElement('div', {class: 'signin-container grid-container'})
    let signinWrapper = createElement('div', {class: 'signin-wrapper grid-container'})

    signinContainer.append(signinWrapper)

    return signinContainer
}


export {
    container
}
