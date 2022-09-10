import {createElement} from '../javascript/utility'

import { savedArticleSection } from './savedArticles'
import { followSuggestion } from './followSuggestion'


export default function aside(){
    let aside = createElement('aside', {class: 'aside dt'})

    aside.append(followSuggestion(), savedArticleSection())

    return aside

}