import * as actionTypes from './actions'

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val
            }
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter}) // deep copy new array with new element concated. (do not use push. push is not a deep copy)
            }
        case actionTypes.DELETE_RESULT:
            console.log('---------------a')
            const updatedArray = state.results.filter(result => result.id !== action.resultElId); // filter created deep copied new array
            return {
                ...state,
                results: updatedArray
            }
    }
    return state;
}

export default reducer;