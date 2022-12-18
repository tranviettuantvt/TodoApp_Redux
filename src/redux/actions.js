export const addTodo = (data) => ({
    type: 'todoList/addTodo',
    payload: data
})

export const toggleStatus = (id) => ({
    type: 'todoList/toggleStatus',
    payload: id
})

export const searchFilterChange=(text) => ({
    type: 'filter/searchFilterChange',
    payload: text
})

export const statusFilterChange = (status) => ({
    type: 'filter/statusFilterChange',
    payload: status
})

export const priorityFilterChange=(priority) => ({
    type: 'filter/priorityFilterChange',
    payload: priority
})