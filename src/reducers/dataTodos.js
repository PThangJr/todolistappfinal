import * as Types from '../constants/ActionTypes';
var dataLocal = JSON.parse(localStorage.getItem('dataTodos'));

var initialState = dataLocal || [];
var dataTodos = (state = initialState, action) => {
    switch (action.type) {
        case Types.DATA_TODOS:
            console.log(dataTodos);

            return state;
        case Types.ADD_TODO: //Thêm 1 công việc vào mảng
            // console.log(action)
            // state = false;
            let newState = [...state];
            const newTodo = {
                id: Date.now(),
                name: action.name,
                status: false
            }
            newState.push(newTodo);
            localStorage.setItem('dataTodos', JSON.stringify(newState));
            return [...newState];
        case Types.TOGGLE_STATUS:
            let stateToggleStatus = [...state];
            stateToggleStatus = stateToggleStatus.map(item => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        status: !item.status
                    }
                }
                else {
                    return item;
                }
            })
            // console.log(stateToggleStatus)
            localStorage.setItem('dataTodos', JSON.stringify(stateToggleStatus));
            return stateToggleStatus;
        case Types.DELETE_TODO:
            let stateDel = [...state];
            stateDel = stateDel.filter(item => item.id !== action.id);
            localStorage.setItem('dataTodos', JSON.stringify(stateDel));
            return [...stateDel];
        case Types.UPDATE_TODO:
            // console.log(action);
            let stateUpdate = [...state];
            stateUpdate = stateUpdate.map(item => {
                if (item.id === action.todo.id) {
                    return {
                        ...item,
                        name: action.todo.name
                    }
                }
                else return item;
            })
            // console.log(stateUpdate)
            localStorage.setItem('dataTodos', JSON.stringify(stateUpdate));

            return [...stateUpdate];
        case Types.SELECT_ALL:
            var stateSelectAll = [...state];
            if (action.statusSelect) {
                stateSelectAll = stateSelectAll.map(item => {
                    return {
                        ...item,
                        status: action.statusSelect
                    }
                })
            }
            else {
                stateSelectAll = stateSelectAll.map(item => {
                    return {
                        ...item,
                        status: false
                    }
                })
            }
            localStorage.setItem('dataTodos', JSON.stringify(stateSelectAll));
            return stateSelectAll;
        case Types.DELETE_ALL:
            const stateDelete = [];
            localStorage.setItem('dataTodos', JSON.stringify(stateDelete))
            return [];
        default: return [...state];
    }
    return state;
}
export default dataTodos;