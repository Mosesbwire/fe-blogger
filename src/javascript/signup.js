import { createElement } from "./utility";
import { formGroup, formGroupBtn } from '../components/formGroup'
import { form } from '../components/form'
import { container } from '../components/signinContainer'

function createTitle(text){
    const titleContainer = createElement('div', {id: 'signin-title', class: "form-title"})

    const attr = {
        innerText: text,
        class: 'title-primary-signin'
    }

    const title = createElement('h1',attr)

    titleContainer.appendChild(title)

    return titleContainer
}

let formGroups = [
    formGroup({class: 'form-group'}, {for: 'firstname', innerText: 'First Name'}, {type:'text','name': 'firstname', required: 'true'}),
    formGroup({class: 'form-group'}, {for: 'lastname', innerText: 'Last Name'}, {type:'text','name': 'lastname', required: 'true'}),
    formGroup({class: 'form-group'}, {for: 'email', innerText: 'Email'}, {type:'email','name': 'email', required: 'true'}),
    formGroup({class: 'form-group'}, {for: 'password', innerText: 'Password'}, {type:'password','name': 'password', required: 'true'}),
    formGroup({class: 'form-group'}, {for: 'confirm-password', innerText: 'Confirm Password'}, {type:'password','name': 'confirm-password', required: 'true'}),
    formGroupBtn({class: 'form-group'}, {type:'submit',class: 'btn btn-signin', innerText: 'Sign up'}),   
]

let signupForm = form({method: 'post', class: 'primary-text', id: 'signup-form'}, formGroups)

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