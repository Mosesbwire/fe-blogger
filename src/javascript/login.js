import {createElement} from './utility'

import {createTitle,createFormGroup, createInput,createLabel,toLoginLink } from './signup'


function createForm(){
    const emailLabel = createLabel('email', 'Email')
    const emailInput = createInput({type: 'email','name':'email', required: 'true'})
    const email = createFormGroup(emailLabel,emailInput,{class: 'form-group'})

    const passwordLabel = createLabel('password', 'Password')
    const passwordInput = createInput({type: 'password','name':'password', required: 'true'})
    const password = createFormGroup(passwordLabel,passwordInput,{class: 'form-group'})

    const formGroup = createElement('div',{class: 'form-group'})
    const button = createElement('button', {type: 'submit', class: 'btn btn-signin', innerText: 'Login'})

    formGroup.append(button)

    const form = createElement('form', {method: 'post', class: 'text-primary', id: 'signin-form'})
    form.append(email, password,formGroup)
    return form
}

function generateLoginPage(){
    const page = createElement('div', {})

    page.appendChild(createTitle('Welcome back.'))
    page.appendChild(createForm())
    page.appendChild(toLoginLink('No account? ','Create one', '/signup'))
    document.getElementById('signin-wrapper').innerHTML = page.innerHTML
}

export {generateLoginPage}
