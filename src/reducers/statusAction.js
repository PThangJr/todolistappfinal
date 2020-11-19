import * as Types from '../constants/ActionTypes';
var initialState = null;
var statusAction = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHANGE_STATUS_ACTION:
            // console.log(action)
            // state = false;
            return action.statusAction
        default: return state;
    }
}
export default statusAction;