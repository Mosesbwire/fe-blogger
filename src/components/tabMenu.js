import { createElement } from "../javascript/utility";
import tab from './tab'


function tabMenu(tabs){
    let div = createElement('div', {class: 'tab-menu container brd-btm  flex-container pt-5'})

    tabs.forEach(tab => {
        div.append(tab)
    });
    
    return div
   
}


export {
    tabMenu
}