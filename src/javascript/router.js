import { generateLoginPage} from './login'
import { generateSignupPage} from './signup'
import { generateHomePage } from './home'

function Router (){

    const routes = {
        '/': generateLoginPage,
        '/login': generateLoginPage,
        '/signup': generateSignupPage,
        
        '/home': generateHomePage,
        
    }

    const navigateTo = (url)=>{
        history.pushState(null,null,url)
        router()
    }
    const router = async function(){
        let view = routes[window.location.pathname]
        
        if (view === undefined){
            // create 404 page
            return `<p>404 error page not found</p>`
        }

       view()
    }

    window.addEventListener('popstate', router)
    document.addEventListener('DOMContentLoaded', ()=>{
        router()
        document.body.addEventListener('click', (event)=>{
            if (event.target.classList.contains('signin-link')){
                event.preventDefault()
                navigateTo(event.target.href)
            }
        })
    })

}

export {
    Router
}