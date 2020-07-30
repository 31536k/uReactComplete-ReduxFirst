import * as actionTypes from '../actions/actionTypes'

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result}) // deep copy new array with new element concated. (do not use push. push is not a deep copy)
            }
        case actionTypes.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.resultElId); // filter created deep copied new array
            return {
                ...state,
                results: updatedArray
            }
        default:
            break;
    }
    return state;
}

export default reducer;