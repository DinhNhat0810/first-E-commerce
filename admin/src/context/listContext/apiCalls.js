import { 
  getListsStart, 
  getListsFailure, 
  getListsSuccess, 
  deleteListStart, 
  deleteListFailure, 
  deleteListSuccess, 
  // createMovieStart, 
  // createMovieFailure, 
  // createMovieSuccess,
  updateListStart, 
  updateListFailure, 
  updateListSuccess,

} from "./ListActions"
import axios from 'axios'

//GET lists
export const getLists = async (dispatch) => {
    dispatch(getListsStart())
    try {
      const res = await axios.get("/lists", {
        headers: {
          token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      })
      console.log('Done')
      dispatch(getListsSuccess(res.data.list))
    } catch (err) {
      dispatch(getListsFailure())
    }
}

// //DELETE list
export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart())
  try {
    await axios.delete("/lists/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    })
    console.log('Deleted')
    dispatch(deleteListSuccess(id))
  } catch (err) {
    dispatch(deleteListFailure())
  }
}

// //CREATE movie
// export const createMovie = async (movie, dispatch) => {
//   dispatch(createMovieStart())
//   try {
//     const res = await axios.post("/movies/", movie, {
//       headers: {
//         token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
//       },
//     })
//     console.log('Done')
//     dispatch(createMovieSuccess(res.data))
//   } catch (err) {
//     dispatch(createMovieFailure());
//   }
// }

// //UPDATE list
export const updateList = async (id, listUpdate, dispatch) => {
  dispatch(updateListStart())
  try {
    const res = await axios.put("/lists/" + id, listUpdate , {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    })
    console.log(res.data)
    dispatch(updateListSuccess(res.data))
  } catch (err) {
    dispatch(updateListFailure())
  }
}

