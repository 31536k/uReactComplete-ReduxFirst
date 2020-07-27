const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.val
            }
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.val
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter}) // deep copy new array with new element concated. (do not use push. push is not a deep copy)
            }
        case 'DELETE_RESULT':
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