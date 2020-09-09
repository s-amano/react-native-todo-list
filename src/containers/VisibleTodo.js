import { connect } from 'react-redux'
import Todo from '../components/Todo'
import {detailTodo} from '../actions/index'
import react, {Component} from 'react'


const mapStateToProps = (state) => {
    return {
      todos: state.todoReducers
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
      RemoveTodo: (id) => {
        dispatch(removeTodo(id))
      },
    }
}
  
const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo)
export default VisibleTodoList

