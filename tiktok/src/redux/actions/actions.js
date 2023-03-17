export const addTodo = (data) => {
    return {
        type: 'addTodo',
        payload: data,
    }
}

export const checkedTodo = (todoId) => {
    return {
        type: 'checkedTodo',
        payload: todoId,
    }
}