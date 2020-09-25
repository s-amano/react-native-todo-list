import { connect } from 'react-redux'
import Todo from '../components/Todo'
import {detailTodo} from '../actions/index'
import react, {Component} from 'react'


const mapStateToProps = (state,ownProps) => {
    const id = ownProps.navigation.getParam('id')
    // console.log(id)
    const targetTodo = state.todoReducers.find((v) => v.id === id);
    return {
      todo: targetTodo
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

