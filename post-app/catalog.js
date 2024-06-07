import { Catalog } from "./src/components/catalog.js"
import { LocationChanger } from "./locationChanger.js";

const renderPostItem = item => {
    const anchor = document.createElement("a");
    anchor.className = 'post-item';
    anchor.onclick = () => LocationChanger.post(item.id);
    anchor.innerHTML = `<span class="post-item__title">
                            ${item.title}
                        </span>
                
                        <span class="post-item__body">
                            ${item.body}
                        </span>`
    return anchor;
}

const getPostItems = async ({ limit, page }) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
        const total = +res.headers.get('x-total-count');
        const items = await res.json();
        return { items, total };
    } catch (e) {
        console.log(e);
    }
}

const renderPhotoItem = item => `
    <a  
        href="photos/${item.id}"
        class="photo-item"
    >
        <span class="photo-item__title">
            ${item.title}
        </span>

        <img 
            src=${item.url}
            class="photo-item__image"
        >
    </a>
`

const getPhotoItems = async ({ limit, page }) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_page=${page}`);
        const total = +res.headers.get('x-total-count');
        const items = await res.json();
        return {items, total};
    } catch (e) {
        console.log(e);
    }
}

const init = () => {
    const catalog = document.getElementById('catalog')
    new Catalog(catalog, { 
        renderItem: renderPostItem,
        getItems: getPostItems
     }).init()
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
} else {
    init()
}
