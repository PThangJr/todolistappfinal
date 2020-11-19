import * as Types from '../constants/ActionTypes';
var initialState = null;
var statusAction = (state = initialState, action) => {
    switch (action.type) {
        case Types.REPAIR_TODO:
            // console.log(action)
            // state = false;
            if (action.id) {
                return action.id;
            }
            else {
                return null;
            }

        default: return state;
    }
}
export default statusAction;