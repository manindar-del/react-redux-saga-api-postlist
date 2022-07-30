import { Post } from '../../Api/Placeholder/post';

export const postSliceAction = {
  getPosts: 'post/getPosts',
  setPostList: 'post/setPostList',
  setPostListAction: (payload: Post[]) => ({ type: postSliceAction.setPostList, payload }),
  getPostDetails: 'post/getPostDetails',
  setPostSingle: 'post/setPostSingle',
  setPostAction: (payload: Post) => ({ type: postSliceAction.setPostSingle, payload }),
};