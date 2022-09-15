import { createElement } from "./utility";
import { formGroup, formGroupBtn } from '../components/formGroup'
import { form } from '../components/form'
import { container } from '../components/signinContainer'

function createTitle(text){
    const titleContainer = createElement('div', {id: 'signin-title'})

    const attr = {
        innerText: text,
        class: 'title-primary-signin'
    }

    const title = createElement('h1',attr)

    titleContainer.appendChild(title)

    return titleContainer
}

let formGroups = [
    formGroup({class: 'form-group mb-4'}, {for: 'firstname', innerText: 'First Name', class: 'mb-2'}, {type:'text','name': 'firstname', required: 'true' ,class: 'pt-1 pb-1 pl-1'}),
    formGroup({class: 'form-group mb-4'}, {for: 'lastname', innerText: 'Last Name', class: 'mb-2'}, {type:'text','name': 'lastname', required: 'true' ,class: 'pt-1 pb-1 pl-1'}),
    formGroup({class: 'form-group mb-4'}, {for: 'email', innerText: 'Email', class: 'mb-2'}, {type:'email','name': 'email', required: 'true' ,class: 'pt-1 pb-1 pl-1'}),
    formGroup({class: 'form-group mb-4'}, {for: 'password', innerText: 'Password', class: 'mb-2'}, {type:'password','name': 'password', required: 'true' ,class: 'pt-1 pb-1 pl-1'}),
    formGroup({class: 'form-group mb-4'}, {for: 'confirm-password', innerText: 'Confirm Password', class: 'mb-2'}, {type:'password','name': 'confirm-password', required: 'true' ,class: 'pt-1 pb-1 pl-1'}),
    formGroupBtn({class: 'form-group'}, {type:'submit', innerText: 'Sign up'}),   
]

let signupForm = form({method: 'post', class: 'primary-text mt-5 mb-5', id: 'signup-form'}, formGroups)

function toLoginLink(text,linkText, href){
    let p = createElement('p', {class: 'primary-text-md', innerText: text})
    let span = createElement('span', {})
    let a = createElement('a', {href: href,class: 'primary-text-accent-bold signin-link', innerText: linkText})

    span.appendChild(a)
    p.append(span)
    
    return p  
}


function generateSignupPage(){
    let outerDiv = container()
    let div = outerDiv.querySelector('.signin-wrapper')

    div.append(createTitle('Join Hadithi.'), signupForm, toLoginLink('Already have an account? ','Sign in', '/login'))
    
    document.getElementById('root').innerHTML = outerDiv.outerHTML
}



export {
    createTitle,
    toLoginLink,
    generateSignupPage


}