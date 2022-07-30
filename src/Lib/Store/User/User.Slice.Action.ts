import { LoginPayload, User } from '../../Api/Fake/Users/users.interface';
import { ForgetPasswordState } from './User.Slice';

export const userSliceAction = {
  login: 'user/login',
  loginAction: (payload: LoginPayload) => ({ type: userSliceAction.login, payload }),
  forgetPassword: 'user/forgetPassword',
  updateForgetPassword: 'user/updateForgetPassword',
  updateForgetPasswordAction: (payload: ForgetPasswordState) => ({ type: userSliceAction.updateForgetPassword, payload }),

  logout: 'user/logout',
  logoutAction: () => ({ type: userSliceAction.logout }),
  setUser: 'user/setUser',
  setUserAction: (payload: User) => ({ type: userSliceAction.setUser, payload }),
};
