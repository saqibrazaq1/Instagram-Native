import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    isLoading: false,
    isError: false,
    isLoggedIn: false,
};
const authSlice = createSlice({
  name: 'auth',  
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      state.isError = action.payload.error;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsError: (state, action) => {
      state.isError = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload
    },
    setIsActive: (state, action) => {
      state.isActive = action.payload;
    },
    setUpdateProImg: (state, action) => {
      state.currentUser = {...state.currentUser, ...action.payload};
    },

  }
});

export const { setCurrentUser, setIsLoading, setIsError, setIsLoggedIn, setIsActive ,setUpdateProImg } = authSlice.actions;
export default authSlice.reducer;