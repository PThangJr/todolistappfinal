import { combineReducers } from 'redux';
import dataTodos from './dataTodos';
import statusAction from './statusAction';
import repairTodo from './repairTodo';
import search from './search';
var appReducer = combineReducers({
    dataTodos,
    statusAction,
    repairTodo,
    search
})
export default appReducer;