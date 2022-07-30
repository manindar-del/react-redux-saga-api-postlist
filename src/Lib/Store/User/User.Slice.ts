import { createSlice } from '@reduxjs/toolkit';
import { ForgetPasswordPayload, LoginPayload, User } from '../../Api/Fake/Users/users.interface';

export interface ForgetPasswordState {
  loading: boolean;
  token: string | null
}

export interface UserSliceState {
  currentUser: null | User;
  login: {
    loading: boolean;
  },
  forgetPassword: ForgetPasswordState
}

const initialState: UserSliceState = {
  currentUser: null,
  login: {
    loading: false
  },
  forgetPassword: {
    loading: false,
    token: null,
  }
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, { payload }: { payload: LoginPayload }) => {
      state.login.loading = true;
      console.log('logging in', state.currentUser, payload);
    },
    forgetPassword: (state, { payload }: { payload: ForgetPasswordPayload }) => {
      state.forgetPassword.loading = true;
      console.log('forget password initiate', payload);
    },
    updateForgetPassword: (state, { payload }: { payload: ForgetPasswordState }) => {
      state.forgetPassword = payload;
      console.log('updateForgetPassword initiate', state, payload);
    },
    setUser: (state, { payload }: { payload: User }) => {
      state.currentUser = payload;
      state.login.loading = payload ? false : true;
    },
    logout: (state) => {
      state.currentUser = null;
    }
  }
});

// Action creators are generated for each case reducer function
export const userSliceActions = userSlice.actions;

export default userSlice.reducer;
