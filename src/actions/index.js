let nextTodoId = 0
export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

export const toggleTodo = (id) => {
    return {
      type: 'TOGGLE_TODO',
      id
    }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const removeTodo = (id) => ({
  type: 'REMOVE_TODO',
  id
})