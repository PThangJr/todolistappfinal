import * as Types from '../constants/ActionTypes';
export const dataTodos = () => {
    return {
        type: Types.DATA_TODOS

    }
}
export const changeStatusAction = (statusAction) => {
    return {
        type: Types.CHANGE_STATUS_ACTION,
        statusAction
    }
}
export const addTodo = (name) => {
    return {
        type: Types.ADD_TODO,
        name
    }
}
export const totalComplete = (status) => {
    return {
        type: Types.TOTAL_COMPLETE,
        status
    }
}
export const toggleStatus = (id) => {
    return {
        type: Types.TOGGLE_STATUS,
        id
    }
}
export const deleteTodo = (id) => {
    return {
        type: Types.DELETE_TODO,
        id
    }
}
export const repairTodo = (id) => {
    return {
        type: Types.REPAIR_TODO,
        id
    }
}
export const updateTodo = (todo) => {
    return {
        type: Types.UPDATE_TODO,
        todo
    }
}
export const search = (name) => {
    return {
        type: Types.SEARCH,
        name
    }
}
