import { combineReducers } from 'redux';
import dataTodos from './dataTodos';
import statusAction from './statusAction';
import repairTodo from './repairTodo';
import search from './search';
import sortTodo from './sortTodo';
var appReducer = combineReducers({
    dataTodos,
    statusAction,
    repairTodo,
    search,
    sortTodo,
})
export default appReducer;