import { createElement } from "./utility";

function createTitle(text){
    const titleContainer = createElement('div', {id: 'signin-title', class: "form-title"})

    const attr = {
        innerText: text,
        class: 'title-primary__signin'
    }

    const title = createElement('h1',attr)

    titleContainer.appendChild(title)

    return titleContainer
}



function createLabel(belongsTo, innerText){
    const label = createElement('label', {for: belongsTo, innerText: innerText})
    return label
}

function createInput(attributes){
    const input = createElement('input', attributes)

    return input
}

function createFormGroup(label,input,attributes){
    const formGroup = createElement('div', attributes)

    formGroup.append(label,input)

    return formGroup
}

function createForm(){
    //reduce code repetition
    const firstNameLabel = createLabel('firstname', 'First Name')
    const firstnameInput = createInput({type: 'text','name':'firstname', required: 'true'})
    const firstname = createFormGroup(firstNameLabel,firstnameInput,{class: 'form-group'})

    const lastNameLabel = createLabel('lastname', 'Last Name')
    const lastnameInput = createInput({type: 'text','name':'lastname', required: 'true'})
    const lastname = createFormGroup(lastNameLabel,lastnameInput,{class: 'form-group'})

    const emailLabel = createLabel('email', 'Email')
    const emailInput = createInput({type: 'email','name':'email', required: 'true'})
    const email = createFormGroup(emailLabel,emailInput,{class: 'form-group'})

    const passwordLabel = createLabel('password', 'Password')
    const passwordInput = createInput({type: 'password','name':'password', required: 'true'})
    const password = createFormGroup(passwordLabel,passwordInput,{class: 'form-group'})

    const confirmpasswordLabel = createLabel('confirm-password', 'Confirm Password')
    const confirmpasswordInput = createInput({type: 'password','name':'confirm-password', required: 'true'})
    const confirmpassword = createFormGroup(confirmpasswordLabel,confirmpasswordInput,{class: 'form-group'})

    const formGroup = createElement('div',{class: 'form-group'})
    const button = createElement('button', {type: 'submit', class: 'btn btn-signin', innerText: 'Sign Up'})

    formGroup.append(button)

    const form = createElement('form', {method: 'post', class: 'text-primary', id: 'signin-form'})
    form.append(firstname, lastname,email, password, confirmpassword,formGroup)
    return form
}

function toLoginLink(text,linkText, href){
    let p = createElement('p', {class: 'text-primary', innerText: text})
    let span = createElement('span', {})
    let a = createElement('a', {href: href,class: 'accented-link signin-link', innerText: linkText})

    span.appendChild(a)
    p.append(span)
    
    return p  
}


function generateSignupPage(){
    const page = createElement('div', {})

    page.appendChild(createTitle('Join Hadithi.'))
    page.appendChild(createForm())
    page.appendChild(toLoginLink('Already have an account? ','Sign in', '/login'))
    document.getElementById('signin-wrapper').innerHTML = page.innerHTML
}



export {
    createTitle,
    createFormGroup,
    createInput,
    createLabel,
    toLoginLink,
    generateSignupPage


}