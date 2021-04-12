
// const initialState = {images: [], fetching: true }

const imageReducer = (state, action) => {
    switch(action.type) {
        case 'STACK_IMAGES':
            return {
                ...state,
                images: state.images.concat(action.images),
                error: ''
            }
        case 'FETCHING_IMAGES':
            return {
                ...state,
                fetching: action.fetching,
                error: ''
            }
        case 'THROW_ERROR':
            return {
                ...state,
                fetching: false,
                error: action.error
            }
        default:
            return state
    }
}

export default imageReducer