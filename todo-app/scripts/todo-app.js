'use strict'

const todos = getSavedTodos()

// debugger
// filter and display filtered todos via input/search

const filters = {
    searchText: '',
    hideCompleted: false
}


renderTodos(todos, filters)

// Listeners

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})

document.querySelector("#new-todo-form").addEventListener('submit', (e) => {
    const text = e.target.elements.newTodo.value.trim()
    e.preventDefault()

    if (text.length > 0) {
        todos.push({
            id: uuidv4(),
            text,
            completed: false
        })
        saveTodos(todos)

        renderTodos(todos, filters)
    }

    e.target.elements.newTodo.value = ''
})




