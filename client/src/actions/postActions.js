import axios from "axios";

import {
  ADD_POST,
  GET_ERRORS,
  GET_POSTS,
  POST_LOADING,
  UPDATE_POST,
  DELETE_POST
} from "./types";

// Add Post
export const addPost = postData => dispatch => {
  axios
    .post("/api/posts", postData)
    .then(res =>
      dispatch({
        type: ADD_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set Loading State
export const setPostLoading = () => {
  return {
    type: POST_LOADING
  };
};

// Get Posts
export const getPosts = () => dispatch => {
  dispatch(setPostLoading());
  axios
    .get("/api/posts")
    .then(res =>
      dispatch({
        type: GET_POSTS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_POSTS,
        payload: null
      })
    );
};

// // Update Post
// export const updatePost = (id, postData) => dispatch => {
//   dispatch(setPostLoading());
//   axios
//     .put(`/api/posts/${id}`, postData)
//     .then(res =>
//       dispatch({
//         type: UPDATE_POST,
//         payload: res.data
//       })
//     )
//     .catch(err =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       })
//     );
// };

// Delete Post
export const deletePost = id => dispatch => {
  dispatch(setPostLoading());
  axios
    .delete(`/api/posts/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_POST,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
