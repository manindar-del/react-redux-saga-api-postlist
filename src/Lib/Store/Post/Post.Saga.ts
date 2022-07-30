import { takeEvery, fork, put } from 'redux-saga/effects';
import postApi from '../../Api/Placeholder/post';
import { postSliceAction } from './Post.slice.Action';
import { PostQuery } from './PostInterface/Post.interface';

function* postQueryMiddleWare({ payload }: { payload: PostQuery }): any {
  const posts = yield postApi.getPostList(payload);
  yield put(postSliceAction.setPostAction(posts));
}

function* postListQuery() {
  yield takeEvery(postSliceAction.getPosts as any, postQueryMiddleWare);
}

function* postDetailsMiddleWare({ payload }: { payload: string }): any {
  const post = yield postApi.getPost(payload);
  yield put(postSliceAction.setPostAction(post));
}

function* postQuery() {
  yield takeEvery(postSliceAction.getPostDetails as any, postDetailsMiddleWare);
}

export default function* postSaga() {
  yield fork(postListQuery);
  yield fork(postQuery);
}

