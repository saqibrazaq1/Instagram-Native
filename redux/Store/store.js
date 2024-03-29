import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slices/authSlice";
import postReducer from "../Slices/postsSlice";

import firebasePostsReducer from "../Slices/postFirebase";
import usersSliceReducer from "../Slices/allusersposts";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    frposts: firebasePostsReducer,
    users: usersSliceReducer,
  },
});
