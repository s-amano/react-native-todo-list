import { connect } from 'react-redux'
import EditTodo from '../components/EditTodo'
import {detailTodo} from '../actions/index'
import react, {Component} from 'react'
import {editTodo} from '../actions/index'
 
const mapStateToProps = (state) => {
    return {
      todos: state.todoReducers
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return {
      EditTodo: (id,text,description,updatedAt) => {
        dispatch(editTodo(id,text,description,updatedAt))
      },
    }
}
  
const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(EditTodo)
export default VisibleTodoList

