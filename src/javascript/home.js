
import { createElement } from './utility'

import { headerSection } from '../components/header'
import tab  from '../components/tab'
import { tabMenu} from '../components/tabMenu'

import { feed } from '../components/feed'
import aside from '../components/aside'


let tabLinks = [
    tab({href: '#', innerText: 'For you', class: 'tab-link nav-text'}),
    tab({href: '#', innerText: 'Following', class: 'tab-link nav-text'})
]

let tabNavigation = tabMenu(tabLinks)


function generateHomePage(){
    let root = document.getElementById('root')
    let wrapper = createElement('div', {class: 'body-wrapper'})
    let main = createElement('main', {class: 'main'})
    
    let header = headerSection()
    root.append(header.firstElementChild)
    main.append(tabNavigation,feed())


    wrapper.append(main,aside())

    root.append(wrapper)


}



export {
    generateHomePage
}

