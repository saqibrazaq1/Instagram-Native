import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};
const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addNewPost: (state, action) => {
      state.data.push(action.payload);
    },
    setPost: (state, action) => {
      state.posts = action.payload;
    },
    setPostError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { addNewPost, setPost, setPostError } = postSlice.actions;
export default postSlice.reducer;
