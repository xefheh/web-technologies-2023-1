import Auth from "../services/auth.js";
import location from "../services/location.js";
import loading from "../services/loading.js";
import Todo from "../services/todo.js";

const createBtnOnclick = () => {
    const deleteBtn = document.getElementById("create-todo-btn");
    deleteBtn.onclick = () => location.createTodo();
}

const deleteBtnOnclick = async (id) => {
    await Todo.delete(id);
    await location.todos();
}

const updateBtnOnclick = async (id) => {
    await location.updateTodo(id);
}

const updateCheckboxOnclick = async (checkbox, id, description) => {
    const checked = checkbox.checked;
    checkbox.checked = !checkbox.checked;
    await Todo.update({id, description, checked});
    checkbox.checked = checked;
}

const renderTodos = async () => {
    const todos = await Todo.getAll();
    const todosContainer = document.getElementById("todos");
    todos.data.forEach(todo => {
        const todoElement = document.createElement("div");
        todoElement.className = 'todos__item';

        const descriptionElement = document.createElement("p")
        descriptionElement.className = 'todos__description';
        descriptionElement.innerText = todo.description;
        
        const deleteBtn = document.createElement("button");
        deleteBtn.className = 'todos__delete';
        deleteBtn.innerText = 'Delete';
        deleteBtn.onclick = async () => await deleteBtnOnclick(todo.id);

        const updateBtn = document.createElement("button");
        updateBtn.className = 'todos__update';
        updateBtn.innerText = 'Update';
        updateBtn.onclick = async () => await updateBtnOnclick(todo.id);
        
        const label = document.createElement("label");
        
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = todo.completed;
        checkbox.onclick = () => updateCheckboxOnclick(checkbox, todo.id, todo.description);
        
        const span = document.createElement("span");
        span.innerText = "Completed ";
        label.appendChild(checkbox);
        label.appendChild(span);
        
        todoElement.appendChild(descriptionElement);
        todoElement.appendChild(deleteBtn);
        todoElement.appendChild(updateBtn);
        todoElement.appendChild(label);
        
        todosContainer.appendChild(todoElement);
    });
}

const init = async () => {
    const { ok: isLogged } = await Auth.me()

    if (!isLogged) {
        return location.login()
    } else {
        loading.stop()
    }

    createBtnOnclick();
    await renderTodos();
    // create POST /todo { description: string }
    // get get /todo/1 - 1 это id
    // getAll get /todo
    // update put /todo/1 - 1 это id { description: string }
    // delete delete /todo/1 - 1 это id
}

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", init)
} else {
    init()
}
