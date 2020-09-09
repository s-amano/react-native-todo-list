import { combineReducers } from 'redux'
import todoReducers from './todos'
import visibilityFilter from './visibilityFilter'
import sort from './sort'
// 以下は使ってない
import todo from './todo'

const todoAppReducers = combineReducers({
    todoReducers,
    visibilityFilter,
    sort,
    })
export default todoAppReducers