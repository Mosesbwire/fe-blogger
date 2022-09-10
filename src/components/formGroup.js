import { createElement } from "../javascript/utility";
import input from "./input";
import label from "./label";
import button from "./button";


function formGroup(formGrpAttr, labelAttr, inputAttr){
    let div = createElement('div', formGrpAttr)
    div.append(label(labelAttr), input(inputAttr))
    return div
}

function formGroupBtn(formGrpAttr, buttonAttr){
    let div = createElement('div', formGrpAttr)
    div.append(button(buttonAttr))
    return div
}

export {
    formGroup,
    formGroupBtn
}