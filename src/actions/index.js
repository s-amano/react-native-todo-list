let nextTodoId = 0
export const addTodo = (text,description,createdAt) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
    description,
    createdAt
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

export const editTodo = (id,text,description,updatedAt) => ({
  type : 'EDIT_TODO',
  id ,
  text,
  description,
  updatedAt
});

export const sortTodo = sortcase => ({
  type: 'SORT_TODO',
  sortcase
});


// 使ってない
export const detailTodo = (id) => ({
  type: 'DETAIL_TODO',
  id
})