import { combineReducers } from 'redux';
import dataTodos from './dataTodos';
import statusAction from './statusAction';
import repairTodo from './repairTodo';
var appReducer = combineReducers({
    dataTodos,
    statusAction,
    repairTodo
})
export default appReducer;