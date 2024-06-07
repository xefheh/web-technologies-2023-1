import TodoRepository from "../repository/todo.js";

class Todo {
    static async getAll() {
        return await TodoRepository.getAll();
    }
    
    static async get(id) {
        return await TodoRepository.get(id);
    }
    
    static async update({id, description, completed}) {
        return await TodoRepository.update(id,  description, completed);
    }
    
    static async create(description) {
        return await TodoRepository.create(description);
    }
    
    static async delete(id) {
        return await TodoRepository.delete(id);
    }
}

export default Todo;