import { fork, put, takeEvery } from 'redux-saga/effects';
import { userApi } from '../../Api/Fake';
import { ForgetPasswordPayload, LoginPayload } from '../../Api/Fake/Users/users.interface';
import routes from '../../Routes/Routes';
import { helperSliceAction } from '../Helper/Helper.Slice.Action';
import { userSliceAction } from './User.Slice.Action';

function* loginMiddleWare({ payload }: { payload: LoginPayload }) {
  const { user } = yield userApi.getCurrentUser();
  yield console.log(user, payload);
  yield put(userSliceAction.setUserAction(user));
  yield put(helperSliceAction.redirectLinkAction(routes.dashboard.children.me.fullPath));
}

function* loginSaga() {
  yield takeEvery(userSliceAction.login as any, loginMiddleWare);
}

function* forgetPasswordMiddleWare({ payload }: { payload: ForgetPasswordPayload }) {
  console.log('forgetPasswordMiddleWare payload', payload);
  const { token } = yield userApi.forgetPassword();
  yield console.log({ token });
  yield put(userSliceAction.updateForgetPasswordAction({ token, loading: false }));
}

function* forgetPasswordSaga() {
  yield takeEvery(userSliceAction.forgetPassword as any, forgetPasswordMiddleWare);
}

function* logOutMiddleWare() {
  yield put(helperSliceAction.redirectLinkAction(routes.login.path));
}

function* logOutSaga() {
  yield takeEvery(userSliceAction.logout as any, logOutMiddleWare);
}

export default function* userSaga() {
  yield fork(loginSaga);
  yield fork(forgetPasswordSaga);
  yield fork(logOutSaga);
}
