import userImage from "./userImage";
import username from "./userName";
import button from './button'

import { createElement } from "../javascript/utility";

function buildFollowProfile(user){
    let div = createElement('div', {class: 'grid-container follow-details'})
    let bioContainer = createElement('div', {})
    let userimg = userImage({class:'wt-user-img', src: user.image})
    let userName = username({class:'wt-name title-primary', innerText: user.username})
    let bio = createElement('div',{class: 'wt-bio muted-text', innerText: user.bio})
    let btn = button({class: 'button wt-btn', innerText: 'Follow'})
    let link = createElement('a', {class: 'wt-btn-link', href: '#'})
    link.append(btn)
    bioContainer.append(userName, bio)
    div.append(userimg, bioContainer, link)
    return div    
}

function followSuggestion(){
    let users = [
        {
            image: 'https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
            username: 'Farokh Shahabi',   
            bio: 'You’ll find me @homebrew , Seed Stage Venture Fund w', 
        },
        {
            image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
            username: 'Ryan Darani',  
            bio: 'I write about these tumultuous times 3x a week. Author of five',   
        },
        {
            image: 'https://images.unsplash.com/photo-1544168190-79c17527004f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
            username: 'Jonathan Saring',  
            bio: 'Strategist entrepreneur & innovator in space tech, government,',   
        },

    ]

    let container = createElement('div', {class: 'follow container'})
    let h2 = createElement('h2', {class:'wt-title', innerText: 'Who to follow'})
    container.append(h2)
    users.forEach((user)=>{
        container.append(buildFollowProfile(user))
    })

    let link = createElement('a', {class: 'accented-link', innerText: 'See more suggestions'})
    container.append(link)

    return container
}

export {
    followSuggestion
}

