const id = new URLSearchParams(window.location.search).get('id');

const getData = async() => {
    try {
        const postInfo = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        return {title, body} = await postInfo.json()
    } catch (e) {
        console.log(e);
    }
}

const getComments = async() => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        return await res.json();
    } catch (e) {
        console.log(e);
    }
}

const renderInformation = async() => {
    const  {title, body} = await getData();
    const informationEl = document.getElementById('information');
    informationEl.innerHTML = `<h1 class="information__header">Title</h1>
                                <p class="information_paragraph">${title}</p>
                                <h1 class="information__header">Body</h1>
                                <p class="information__paragraph">${body}</p>`;
}

const renderComments = async() => {
    const commentsEl = document.getElementById('comments');
    const comments = await getComments();
    if(comments.length === 0) {
        commentsEl.innerHTML = `<h1>No comments found.</h1>`;
        return;
    }
    commentsEl.innerHTML = `<h1>Comments:</h1>`
    comments.forEach((comment) => {
        commentsEl.innerHTML += `<div class="comments__item"> 
                                    <span class="comments__el"><span class="comments__el--header">Name: </span>${comment.name}</span>
                                    <span class="comments__el"><span class="comments__el--header">Email: </span>${comment.email}</span>
                                    <span class="comments__el"><span class="comments__el--header">Body: </span>${comment.body}</span>
                                 </div>`
    })
}

const init = async () =>
    await Promise.all([renderComments(), renderInformation()]) 

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}