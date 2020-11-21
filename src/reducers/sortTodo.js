import * as Types from '../constants/ActionTypes';
var initialState = -1; // state === -1 ? mặc định : state === 0 ? Chưa hoàn thành : state === 1 ? Hoàn thành 
var sortTodo = (state = initialState, action) => {
    switch (action.type) {
        case Types.SORT:
            // console.log(action);
            if (action.statusSort === -1) {
                state = -1;
            }
            else {
                state = state === 1 ? -1 : state + 1;
            }
            return state;
        default: return state;
    }
}
export default sortTodo;