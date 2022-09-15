import articleSection from "./articleSection"
import userInfo from "./userInfo"

import {createElement} from '../javascript/utility'


function buildSavedArticle(article){
    let articleAttr = {
        title: 'primary-title-sb',
        summary : 'display',
        image : 'display',
        footer : 'display',
    }
    let userInfoSection = userInfo({class: 'flex-container'}, {src: article.userImage, class: 'profile-img'}, {innerText: article.username, class: 'primary-text-sm'})
    userInfoSection.style.marginBottom = "-5px"
    let div = createElement('div', {})
    div.innerHTML = articleSection(articleAttr,article)
    
    let fullSection = createElement('div', {class: 'mb-4'})

    fullSection.append(userInfoSection, div.firstElementChild)
    return fullSection
}

function savedArticleSection(){
    let container = createElement('div', {class: 'container mt-5'})
    let h2 = createElement('h2', {class: 'primary-title-sb mb-4', innerText: 'Recently saved'})

    container.append(h2)
    let articles = [
        {
            userImage: 'https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
            username: 'Moses Bwire',
            title:'From $0 to $200,000 in 12 months: the truth about solo growth',
            summary:'Starting a business has been one of the most exhilarating and scary times in my life. I went from a regular monthly salary at a prestigious',
            image: 'https://miro.medium.com/fit/c/168/168/1*u2UjFP4p1An4TlXSbkF5Yg.jpeg',
            read: 10,
        },
        {
            userImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
            username: 'Chandrika Deb',
            title:'How I earned more than $1000 from a side project?',
            summary:'Sometimes even solo developers can be competitors for huge companies — Many projects started as a one-person side hustle but eventually grew into a successful large business. Good illustrations are projects like',
            image: 'https://miro.medium.com/fit/c/168/168/0*UIR8C8n-h5XeNwpk',
            read: 4,
        },
        {
            userImage: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
            username: 'Volodymyr Golosay',
            title:'Million-Dollar Projects Created by Only One Person',
            summary:'Sometimes even solo developers can be competitors for huge companies — Many projects started as a one-person side hustle but eventually grew into a successful large business. Good illustrations are projects like',
            image: 'https://miro.medium.com/fit/c/168/168/1*IeqXjsWjHdCaGzlJgUYcTQ.png',
            read: 6,
        },
    ]

    articles.forEach((article)=>{
        container.append(buildSavedArticle(article))
    })


    let link = createElement('a', {class: 'primary-text-accent more-link mt-5', href: '#', innerText: 'See all (20)'})

    container.append(link)

    return container

}


export {
    savedArticleSection
}