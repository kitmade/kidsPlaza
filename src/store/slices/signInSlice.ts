import {createSlice} from '@reduxjs/toolkit';

export interface SignInState {
  isLogin: boolean;
}

const intialState: SignInState = {
  isLogin: false,
};

export const signInSlice = createSlice({
  name: 'signIn',
  initialState: intialState,
  reducers: {
    updateLoginStatus: (state, {payload}) => {
      state.isLogin = payload;
    },
  },
});

export const {updateLoginStatus} = signInSlice.actions;

export default signInSlice.reducer;
