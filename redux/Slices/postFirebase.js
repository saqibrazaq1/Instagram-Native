import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firebasePostsData: [],
};

const postFirebaseSlice = createSlice({
  name: "postsfirebase",
  initialState,
  reducers: {
    firebasePost: (state ,action) => {
      state.firebasePostsData=action.payload
    },
    setPostsError: (state, action) => {
      state.firebasePostsData(action.payload);
    },
  },
});

export const {firebasePost,setPostsError} = postFirebaseSlice.actions;
export default postFirebaseSlice.reducer;