import { SET_LOADING } from "../actions/types";
import { fromJS } from 'immutable'

const initialState = fromJS({
    loading: false
});

export  const uiReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SET_LOADING:
            // return {...state, loading: action.payload}
            return state.setIn(['loading'], fromJS(action.payload))
        default:
            return state;
    }
}