import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import todoAppReducers from '../reducers/index'
  
const store = createStore(todoAppReducers);

export default store;