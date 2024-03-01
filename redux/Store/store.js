import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Slices/authSlice";
import postReducer from "../Slices/postsSlice";
// import postSlice from "../Slices/postsSlice";
// import randomUsers from "../Slices/otherUsersSlice"
import firebasePostsReducer from "../Slices/postFirebase";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
    frposts:firebasePostsReducer,
    // post: postSlice.reducer, (another method of import)
    // randomUsers: randomUsersReducer,
  }
})