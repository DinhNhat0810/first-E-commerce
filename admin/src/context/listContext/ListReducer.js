const ListReducer = (state, action) => {
    switch (action.type) {
        //GET
        case "GET_LISTS_START":
            return {
                lists: [],
                isFetching: true,
                error: false,
            }

        case "GET_LISTS_SUCCESS":
            return {
                lists: action.payload,
                isFetching: false,
                error: false,
            }

        case "GET_LISTS_FAILURE":
            return {
                lists: [],
                isFetching: false,
                error: true,
            }
        
        //DELETE
        case "DELETE_LIST_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            }

        case "DELETE_LIST_SUCCESS":
            return {
                lsits: state.lists.filter(list => list._id !== action.payload),
                isFetching: false,
                error: false,
            }

        case "DELETE_LIST_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            }

        //CREATE
        // case "CREATE_MOVIE_START":
        //     return {
        //         ...state,
        //         isFetching: true,
        //         error: false,
        //     }

        // case "CREATE_MOVIE_SUCCESS":
        //     return {
        //         movies: [...state.movies, action.payload],
        //         isFetching: false,
        //         error: false,
        //     }

        // case "CREATE_MOVIE_FAILURE":
        //     return {
        //         ...state,
        //         isFetching: false,
        //         error: true,
        //     }

        //UPDATE
        case "UPDATE_LIST_START":
            return {
                ...state,
                isFetching: true,
                error: false,
            }

        case "UPDATE_LIST_SUCCESS":
            return {
                lists: [...state.lists, action.payload],
                isFetching: false,
                error: false,
            }

        case "UPDATE_LIST_FAILURE":
            return {
                ...state,
                isFetching: false,
                error: true,
            }
    

        default: 
            return { ...state }
        
    }

}

export default ListReducer