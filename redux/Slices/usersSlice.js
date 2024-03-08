import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersData: [],
};

const usersSlice = createSlice({
  name: "AllUsers",
  initialState,
  reducers: {
    allUsersData: (state, action) => {
      state.usersData = action.payload;
    },
    allusersPosts:(state,action)=>{
        state.usersData.posts=action.payload
    },
    setUsersError: (state, action) => {
      state.usersData(action.payload);
    },
  },
});
export const { allUsersData, setUsersError } = usersSlice.actions;
export default usersSlice.reducer;
