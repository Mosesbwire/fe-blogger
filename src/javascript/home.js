import profileImage from '../assets/profile.png'
import {createElement,createButton,createLink,createList,createListItem} from './utility'


function createTabMenu(){
    return `
            <ul class="tab-list nav-text">
                <li><a href="#" class="tab-link nav-text">For you</a></li>
                <li><a href="#" class="tab-link nav-text">Following</a></li>
            </ul>`    
}



function createArticleSection(authorName,date,title,summary,profileImg){

    return `
    <div class="article-owner flex-container">
        <div class="user-img">
            <img src=${profileImg} class= "profile-img"alt="">
        </div>
        <div class="author-name text-primary">
            <p>${authorName}</p>
        </div>
        <div class="posted-on muted-text">
        <p>${date}</p>
        </div>
    </div>
    <div class="grid-container article-details">
        <div class=" title-summary-section">
            <div>
                <h1 class="title-primary">${title}</h1>
            </div>
            <div class="summary dt text-primary">
                <p>${summary}</p>
            </div> 
        </div>
        <div class="article-img">
            <img src="https://images.unsplash.com/photo-1662375731708-6c4b601b5dde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1NHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60" alt="" srcset="">
        </div>
        <div class="flex-container article-footer">
            <p class="read-time muted-text">9 min read</p>
            <a href="#" class="bookmark">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="rn"><path d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z" fill="#000"></path></svg>
            </a>
        </div>
    </div>`
}

function createWhoToFollow(name, bio, profileImage){
    return `
    <div class="grid-container follow-details">
        <div  class="wt-user-img">
            <img src=${profileImage} alt="">
        </div>
        <div>
            <p class="wt-name title-primary">${name}</p>
            <p class="wt-bio muted-text">${bio}</p>
        </div>
        <a href="#" class="wt-btn-link">
            <button class="button wt-btn">Follow</button>
        </a>
    </div>`
}

function savedArticlesSection(user, title, date, time,image){
    return `
    <div class="saved-item">
        <div class="rs-user-details flex-container">
            <img src=${image} alt="" class="profile-img">
            <p>${user}</p>
        </div>
        <p class="title title-primary">${title}</p>
            <div class="article-info muted-text flex-container">
            <p>${date}</p>
            <p>${time} min read</p>
        </div>
    </div>`
}


function mainSection(){
   const main = document.getElementById('home-main')
   const articles = [
    {userName: "Moses Bwire", date: 'Sept 18', title: 'This is the first test. Testing one', summary: 'this is the summary section' },
    {userName: "Sheila Bwire", date: 'Oct 18', title: 'This is the first test. Testing one', summary: 'this is the summary section' },
    {userName: "Kian Bwire", date: 'Nov 18', title: 'This is the first test. Testing one', summary: 'this is the summary section' },
    {userName: "Moses Bwire", date: 'Dec 18', title: 'This is the first test. Testing one', summary: 'this is the summary section' },
    {userName: "Moses Bwire", date: 'Jan 18', title: 'This is the first test. Testing one', summary: 'this is the summary section' }, 

   ]
   let contentSection = createElement('div', {class: 'content-section container'})
   let tabMenu = createElement('div', {class: 'tab-menu container'})
   tabMenu.innerHTML = createTabMenu()
   main.append(tabMenu)
   articles.forEach((article)=>{
    let articleTag = createElement('article', {class: 'article'})
    
    articleTag.innerHTML = createArticleSection(article.userName,article.date, article.title, article.summary,profileImage)
    contentSection.append(articleTag)

   })
   main.appendChild(contentSection)
}

function asideSection(){
    let aside = document.getElementById('aside')
    let container = createElement('div', {class: 'follow container'})
    let savedContainer = createElement('div', {class: 'recently-saved container'})
    let h2 = createElement('h2', {class: 'wt-title', innerText: 'Who to follow'})
    let hs2 = createElement('h2', {class: 'wt-title', innerText: 'Recently saved'})
    container.append(h2)
    savedContainer.append(hs2)
    let div = createElement('div', {})
    let div2 = createElement('div', {})
    div.innerHTML = createWhoToFollow('moses', 'bio', profileImage)
    container.append(div)
    div2.innerHTML = savedArticlesSection('Kian', 'saved article','Oct 15', '4', profileImage)
    savedContainer.append(div2)

    aside.append(container,savedContainer)

}

function generateHomePage(){
    mainSection()
    asideSection()
}



export {
    generateHomePage
}

