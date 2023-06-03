import storage from "./ultils/storage.js";

const init = {
    todos: storage.get(),
    filter: "all",
    filters: {
        all: () => true,
        active: todo => !todo.completed,
        completed: todo => todo.completed,
    }
}


const actions = {
    add({ todos }, title) {
        if (title) {
            todos.push({
                id: todos.length,
                title,
                completed: false,
            })
            storage.set(todos);
        }
    },
    toggle({ todos }, index) {
        const todo = todos[index];
        todo.completed = !todo.completed;
        storage.set(todos);
    },
    toggleAll({ todos }, completed) {
        todos.forEach(todo => {
            todo.completed = completed;            
        })
        storage.set(todos);
    },
    destroy({ todos }, index) {
        todos.splice(index, 1);
        storage.set(todos);
    },
    switchFilter(state, filter) {
        state.filter = filter;
    }
}

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, ...args);
    return state;
}