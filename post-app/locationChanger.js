const url = new URL(window.location.href);

export class LocationChanger {
    
    static posts = () => {
        window.location.href = url.origin + 'catalog.html';
    }
    static post = (id) => {
        window.location.href = url.origin + `/post.html?id=${id}`;
    }
}