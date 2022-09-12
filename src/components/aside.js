import {createElement} from '../javascript/utility'

export default function aside(sections){
    let aside = createElement('aside', {class: 'aside dt'})

    sections.forEach(section => {
        aside.append(section)
    });

    return aside
}