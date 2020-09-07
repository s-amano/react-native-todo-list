import { combineReducers } from 'redux'
import todoReducers from './todos'
import visibilityFilter from './visibilityFilter'

const todoAppReducers = combineReducers({
    todoReducers,
    visibilityFilter
    })
export default todoAppReducers