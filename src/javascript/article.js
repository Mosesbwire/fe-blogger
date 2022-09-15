import { headerSection } from "../components/header"
import userImage from "../components/userImage"
import username from "../components/userName"
import userInfo from "../components/userInfo"
import {createElement } from './utility'
import aside from "../components/aside"
import button from "../components/button"
import articleSection from '../components/articleSection'


let articles = [
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
]

function authorSection(user){
    let wrapperDiv = createElement('div', {class: 'flex-container container'})
    let divInfo = createElement('div', {})
    let articleInfo = createElement('div', {class: 'flex-container'})

    let image = userImage({class: 'profile-img-md', src: user.image})
    let name = username({class: 'primary-text ml-3', innerText: user.username})
    let date = createElement('p', {innerText: user.published, class: 'secondary-text ml-3'})
    let readTime = createElement('p', {innerText: user.read, class: 'secondary-text'})

    articleInfo.append(date,readTime)
    divInfo.append(name, articleInfo)
    wrapperDiv.append(image,divInfo)

    return wrapperDiv

}

function userDetails(user){
    let wrapper = createElement('div', {class: 'container mb-5'})
    let userinfo = userInfo({}, {class: 'profile-img-lg mb-4', src: user.image}, {class: 'primary-title-sb', innerText: user.username})
    let followerCount = createElement('p', {class: 'secondary-text-lg', innerText: `${user.followers} Followers`}) 
    userinfo.append(followerCount)
    let bioText = createElement('p', {class: 'secondary-text pt-3 pb-4', innerText: user.bio})
    let followBtn = button({innerText: 'Follow', class: 'primary-text-md btn articlePg-follow-btn'})

    wrapper.append(userinfo,bioText,followBtn)

    return wrapper
}

function moreArticles(user){
    let articleAttr = {
        title: 'secondary-title-bd-sm pt-5',
        summary : 'display',
        image : 'article-img-sm',
        footer : 'display',
    }
    let wrapper = createElement('div', {class: 'container'})
    let title = createElement('h1', {innerText: 'More from Hadithi.', class: 'primary-title-sb pb-4'})
    
    wrapper.append(title)

    articles.forEach(article => {
        let div = createElement('div', {})
        div.innerHTML = articleSection(articleAttr, article)
        wrapper.append(userInfo({class: 'flex-container'}, {class: 'profile-img', src: user.image}, {innerText: user.username, class: 'primary-text-sm'}))
        div.firstElementChild.classList.add('mb-5')

        wrapper.append(div.firstElementChild)
        wrapper.lastElementChild.style.marginTop = '-30px'
    }) 

    return wrapper
}


function buildArticlePage(){
    let root = document.getElementById('root')
    let wrapper = createElement('div', {class: 'body-wrapper'})
    let main = createElement('main', {class: 'main mt-6'})
    
    let header = headerSection()
    root.append(header.firstElementChild)

    const user = {
        username: 'Mishka',
        image: 'https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
        published: 'Dec 31, 2018 ',
        read: ' 3 min read',
        followers: 100,
        bio: 'Creator of thiscodeworks.com Follow me @mishkaorakzai on Twitter. I write at mishka.codes'
    }

    let asideElements = [
        userDetails(user),
        moreArticles(user)
    ]

    main.append(authorSection(user))
    wrapper.append(main, aside(asideElements))
    root.append(wrapper)

}


export {
    buildArticlePage
}