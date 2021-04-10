
const pagesReducer = (state, action) => {
    switch(action.type) {
        case 'ADVANCE_PAGE':
            return {
                ...state,
                page: state.page + 1
            }
        default:
        return state
    }
}

export default pagesReducer