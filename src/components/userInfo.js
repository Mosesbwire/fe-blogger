import userImage from "./userImage";
import username from "./userName";
import { createElement } from "../javascript/utility";


export default function userInfo(infoAttr, imgAttr, nameAttr){

    let infoSection = createElement('div', infoAttr)
    infoSection.style.alignItems = "center"
    infoSection.append(userImage(imgAttr), username(nameAttr))
    return infoSection
}   