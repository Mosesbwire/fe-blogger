import {createElement} from '../javascript/utility'


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


export default function aside(sections){
    let aside = createElement('aside', {class: 'aside dt pt-6'})

    sections.forEach(section => {
        aside.append(section)
    });

    window.addEventListener('DOMContentLoaded', ()=>{

        document.addEventListener('scroll', ()=>{
           let inView = isInViewport(aside.lastElementChild.lastElementChild)
           
           if(inView){
            aside.lastElementChild.classList.add('position-sticky')

           }
        })
        
    })

   
    return aside
}