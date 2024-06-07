import api from "../services/api.js";

const TodoRepository = {
    async getAll() {
        return await api('/todo');
    },
    async get(id) {
        return await api(`/todo/${id}`);
    },
    async update(id, description, completed) {
        console.log(JSON.stringify({
            description: description,
            completed: completed,
        }));
        return await api(`/todo/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                description: description,
                completed: completed,
            })
        });
    },
    async create(description) {
        return await api(`/todo`, {
            method: 'POST',
            body: JSON.stringify({
                description: description,
                completed: false
            })
        });
    },
    async delete(id) {
        return await api(`/todo/${id}`, {
            method: 'DELETE'
        });
    }
}

export default TodoRepository;