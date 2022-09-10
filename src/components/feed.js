import { createElement} from '../javascript/utility'
import profile from '../assets/profile.png'

import articleSection from './articleSection'
import userInfo from './userInfo'

function buildArticleSection(article){
    let articleAttr = {
        summary : '',
        image : '',
        footer : '',
    }
    let userInfoSection = userInfo({class: 'article-owner flex-container'}, {src: article.userImage, class: 'profile-img'}, {innerText: article.username, class: 'author-name text-primary'})
    let date = createElement('p', {class: 'muted-text', innerText: article.published})
    userInfoSection.append(date)
    let div = createElement('div', {})
    div.innerHTML = articleSection(articleAttr,article)
    
    let fullSection = createElement('div', {class: 'article'})

    fullSection.append(userInfoSection, div.firstElementChild)
    return fullSection
}


function feed(){
    let container = createElement('div', {class: 'content-section container'})

    let articles = [
        {
            userImage: 'https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
            username: 'Moses Bwire',
            title:'From $0 to $200,000 in 12 months: the truth about solo growth',
            summary:'Starting a business has been one of the most exhilarating and scary times in my life. I went from a regular monthly salary at a prestigious',
            image: 'https://miro.medium.com/fit/c/168/168/1*u2UjFP4p1An4TlXSbkF5Yg.jpeg',
            read: '10 ',
            published: 'Aug 10'
        },
        {
            userImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
            username: 'Chandrika Deb',
            title:'How I earned more than $1000 from a side project?',
            summary:'Sometimes even solo developers can be competitors for huge companies — Many projects started as a one-person side hustle but eventually grew into a successful large business. Good illustrations are projects like',
            image: 'https://miro.medium.com/fit/c/168/168/0*UIR8C8n-h5XeNwpk',
            read: '4 ',
            published: 'Sept 10'
        },
        {
            userImage: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
            username: 'Volodymyr Golosay',
            title:'Million-Dollar Projects Created by Only One Person',
            summary:'Sometimes even solo developers can be competitors for huge companies — Many projects started as a one-person side hustle but eventually grew into a successful large business. Good illustrations are projects like',
            image: 'https://miro.medium.com/fit/c/168/168/1*IeqXjsWjHdCaGzlJgUYcTQ.png',
            read: '6 ',
            published: 'Sept 1'
        },
        {
            userImage: 'https://images.unsplash.com/photo-1504199367641-aba8151af406?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
            username: 'Michael Lin',
            title:'Build your brand, not your business',
            summary:'Everyone is a brand. Yes, that means you! — I wanted to be a billionaire. So I did what everyone in Silicon Valley does — start a startup. Then this happened: I quit my job I spent 6 months building a product I launche',
            image: 'https://miro.medium.com/fit/c/168/168/1*CaeanTQZafvnbr8bNfx0hQ.png',
            read: '7 ',
            published: 'Jul 30'
        },
        {
            userImage: 'https://images.unsplash.com/photo-1499155286265-79a9dc9c6380?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
            username: 'Nitin Sharma',
            title:'11 Stupidly Simple Side Hustles to Earn Extra Money as a Programmer',
            summary:'as a Programmer No BS and please don’t expect blogging, YouTube, freelancing, or Medium. — Over the previous several years, I’ve dabbled in a variety of ',
            image: 'https://miro.medium.com/fit/c/168/168/0*Nd7BW6Nf32qtTZV8',
            read: '10 ',
            published: 'Jul 4'
        },
        {
            userImage: 'https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
            username: 'Farokh Shahabi',
            title:'Startup Launch Checklist: How to Get The First 100 Users',
            summary:'Most startups die before ever reaching their first 100 active users. Getting the first customers to trust your product is one of the most difficult ',
            image: 'https://miro.medium.com/fit/c/168/168/1*vJ2b047ZQeWbCgXs7JyCTA.png',
            read: '12 ',
            published: 'Sept  3'
        },
        {
            userImage: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
            username: 'Ryan Darani',
            title:'Freelancer: I made over $500,000 in 18 months, and I’m exhausted.',
            summary:'Before you read this article, know this. I’m not being ungrateful for my position. I want people to see the other side of being ‘successful.’ A qui',
            image: 'https://miro.medium.com/fit/c/168/168/1*_Lg7cHtEwOkbxOV5YH7yBw.jpeg',
            read: '7 ',
            published: 'Mar 17'
        },
        {
            userImage: 'https://images.unsplash.com/photo-1544168190-79c17527004f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60',
            username: 'Jonathan Saring',
            title:'3 Ways to Build Micro-Frontends',
            summary:'How to develop micro frontends that scale with React, TypeScript, and anything modern web. — Micro Frontends have been the hottest topic around the frontend community in the past couple of years. It isn’t a',
            image: 'https://miro.medium.com/fit/c/168/168/1*qGj8rwvH-KX9z_xBqosxGw.png',
            read: "7 ",
            published: 'Aug 13'
        },
        
    ]

    articles.forEach((article)=>{
        container.append(buildArticleSection(article))
    })

    return container
}


export {
    feed
}

