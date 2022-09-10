import '../styles/style.css'

import { login } from './login'
import { Router } from './router'

Router()



document.addEventListener('submit', (event)=>{
    event.preventDefault()
    if(event.target.id === 'login-form'){
        login().then((response)=>{
            if(response){
                location.pathname = '/home'
                Router()
            }
        })
    }
   
})








