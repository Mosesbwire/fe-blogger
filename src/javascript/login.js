import {createElement} from './utility'

import {createTitle,toLoginLink } from './signup'
import { formGroup, formGroupBtn} from '../components/formGroup'
import {form} from '../components/form'
import { container} from '../components/signinContainer'

let formGroups = [
    formGroup({class: 'form-group'}, {for: 'email', innerText: 'Email'}, {type:'email','name': 'email', required: 'true'}),
    formGroup({class: 'form-group'}, {for: 'password', innerText: 'Password'}, {type:'password','name': 'password', required: 'true'}),
    formGroupBtn({class: 'form-group'}, {type:'submit',class: 'btn btn-signin', innerText: 'Login'}),   
]

let loginForm = form({method: 'post', class: 'text-primary', id: 'login-form'}, formGroups)

function generateLoginPage(){

    let outerDiv = container()
    let div = outerDiv.querySelector('.signin-wrapper')
    div.append(createTitle('Join Hadithi.'), loginForm, toLoginLink('No account? ','Create one', '/signup'))
    document.getElementById('root').innerHTML = outerDiv.outerHTML
    
}

async function login(){
    // make fetch request to server
    const userExample = {
        email: 'mosesbwire@gmail.com',
        password: '123456'
    }

    const form = document.getElementById('login-form')
    let inputs = form.getElementsByTagName('input')

    if(userExample.email === inputs[0].value && userExample.password === inputs[1].value){
        return true
    }

    return {error: 'This user does not exist'}
}

export {generateLoginPage, login}
