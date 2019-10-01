import { ADD_ARTICLE, USER_LIST } from "../constants/action-types";
const initialState = {
    success: true,
    users: []
};

function userReducer(state = initialState, action) {
    if (action.type === USER_LIST && action.payload.success) {
        return Object.assign({}, state, {
            users: state.users.concat(action.payload.result)
        });
    }
    return state;
}

export default userReducer;