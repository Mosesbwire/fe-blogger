import { createElement } from "../javascript/utility";


export default function userImage(attr){
    let className = attr['class']
    if(className){
        let margin = `${attr['class']} mr-2 `

        attr['class'] = margin

    }
    return createElement('img', attr)

}