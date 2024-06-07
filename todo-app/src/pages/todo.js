import Auth from "../services/auth.js";
import Todo from "../services/todo.js";
import Form from "../components/form.js";
import location from "../services/location.js";
import loading from "../services/loading.js";

const id = new URLSearchParams(window.location.search).get('id');
let currentInformation;

const init = async () => {
    const { ok: isLogged } = await Auth.me()

    if (!isLogged) {
        return location.login()
    } else {
        loading.stop()
    }
    
    if (id !== null) {
        currentInformation = await Todo.get(id);
        const descriptionField  = document.getElementById('description');
        descriptionField.value = currentInformation.data.description;
    }

    const formEl = document.getElementById('todo-form')

    new Form(formEl, {
        'description': (value) => {
            if (value.length < 5) {
                return 'Описание не может быть меньше 5 символов!'
            }
            return false
        }
    }, async (values) => {
        if(id === null) {
            await Todo.create(values.description);
        } else {
            await Todo.update({id, description: values.description,
                completed: currentInformation.data.completed});
        }
        await location.todos();
    })
}

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", init)
} else {
    init()
}