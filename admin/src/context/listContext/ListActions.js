//GET movies
export const getListsStart = () => ({
    type: "GELISTIES_START",
  })
  
export const getListsSuccess = (lists) => ({
  type: "GET_LISTS_SUCCESS",
  payload: lists,
})
  
export const getListsFailure = () => ({
  type: "GET_LISTS_FAILURE",
})

//DELETE movie
export const deleteListStart = () => ({
  type: "DELETE_LIST_START",
})

export const deleteListSuccess = (id) => ({
  type: "DELETE_LIST_SUCCESS",
  payload: id,
})

export const deleteListFailure = () => ({
  type: "DELETE_LIST_FAILURE",
})



//CREATE movie
// export const createMovieStart = () => ({
//   type: "CREATE_MOVIE_START",
// })

// export const createMovieSuccess = (movie) => ({
//   type: "CREATE_MOVIE_SUCCESS",
//   payload: movie,
// })

// export const createMovieFailure = () => ({
//   type: "CREATE_MOVIE_FAILURE",
// })


//UPDATE list
export const updateListStart = () => ({
  type: "UPDATE_LIST_START",
})

export const updateListSuccess = (list) => ({
  type: "UPDATE_LIST_SUCCESS",
  payload: list,
})

export const updateListFailure = () => ({
  type: "UPDATE_LIST_FAILURE",
})




  
  