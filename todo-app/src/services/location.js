const url = new URL(window.location.href)

const location = {
    index: () => {
        window.location.href = url.origin + '/index.html'
    },
    login: () => {
        window.location.href = url.origin + '/login.html'
    },
    reg: () => {
        window.location.href = url.origin + '/reg.html'
    },
    user: () => {
        window.location.href = url.origin + '/user.html'
    },
    createTodo: () => {
        window.location.href = url.origin + '/todo.html'
    },
    updateTodo: (id) => {
        window.location.href = url.origin + '/todo.html' + `?id=${id}`;
    },
    todos: () => {
        window.location.href = url.origin + '/todos.html'
    }
}

export default location