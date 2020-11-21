import * as Types from '../constants/ActionTypes';
var initialState = '';
var search = (state = initialState, action) => {
    switch (action.type) {
        case Types.SEARCH:
            return action.name;
        default: return state;
    }
}
export default search;