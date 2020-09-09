import { connect } from 'react-redux'
import TodoList from '../components/TodoList'

import {toggleTodo, removeTodo,} from '../actions/index'



// const GetSortTodos = (todos,filter,sort) => {
//   const newTodos = getVisibleTodos(todos, filter)
//   switch(sort) {
//     case 'ASC':
//       newTodos.sort(function(a,b) {
//         if (a.createdAt < b.createdAt) {
//           return -1;
//       } else {
//           return 1;
//       }
//     })
//     case 'DES':
//       newTodos.sort(function(a,b) {
//         if (a.createdAt > b.createdAt) {
//           return -1;
//       } else {
//           return 1;
//       }
//     })
//     default:
//       return todos
//   }
// }

const GetSortTodos = (todos,filter,sort) => {
  const newTodos = getVisibleTodos(todos, filter)
  // console.log(sort)
  switch(sort) {
    case 'ASC':
      // console.log(filter)
      // console.log(newTodos.sort(function(a,b) { return (a.createdAt > b.createdAt ? 1 :-1) }))
      return newTodos.sort(function(a,b) { return (a.createdAt > b.createdAt ? 1 :-1) })
    case 'DES':
      // console.log(filter)
      // console.log(newTodos.sort(function(a,b) { return (a.createdAt < b.createdAt ? 1 :-1) }))
      return newTodos.sort(function(a,b) { return (a.createdAt < b.createdAt ? 1 :-1) })
  }
}


const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      // console.log(sort)
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter((t) => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter((t) => !t.completed)
  }
}

// state.visibilityFilter

const mapStateToProps = (state) => {
  return {
    todos: GetSortTodos(state.todoReducers,state.visibilityFilter, state.sort),
    state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    },
    RemoveTodo: (id) => {
      dispatch(removeTodo(id))
    },
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
export default VisibleTodoList