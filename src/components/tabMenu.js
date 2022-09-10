import { createElement } from "../javascript/utility";
import tab from './tab'


function tabMenu(tabs){
    let outerDiv = createElement('div', {class: 'tab-menu container'})
    let div = createElement('div', {class: 'tab-list'})

    tabs.forEach(tab => {
        div.append(tab)
    });
    outerDiv.append(div)
    return outerDiv
   
}


export {
    tabMenu
}