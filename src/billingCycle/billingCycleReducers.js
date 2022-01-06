const INITIAL_STATE = {
    billing_cycles: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'FETCH_LIST':
            return {
                ...state,
                billing_cycles: action.payload.data
            }
        default:
            return state
    }
}