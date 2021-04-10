
// const initialState = {images: [], fetching: true }

const imageReducer = (state, action) => {
    switch(action.type) {
        case 'STACK_IMAGES':
            return {
                ...state,
                images: state.images.concat(action.images)
            }
        case 'FETCHING_IMAGES':
            return {
                ...state,
                fetching: action.fetching
            }
        default:
            return state
    }
}

export default imageReducer