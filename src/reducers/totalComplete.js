import * as Types from '../constants/ActionTypes';
var initialState = false;
var totalComplete = (state = initialState, action) => {
    switch (action.type) {
        case Types.TOTAL_COMPLETE:
            console.log(action)
            // state = false;
            return action.status;
        default: return state;
    }
}
export default totalComplete;