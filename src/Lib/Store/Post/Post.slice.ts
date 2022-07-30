import { Post } from './../../Api/Placeholder/post';
import { createSlice } from '@reduxjs/toolkit';
import { PostQuery } from './PostInterface/Post.interface';

export interface PostSlice {
  posts: Post[];
  post: Post | null;
}

const initialState: PostSlice = {
  posts: [],
  post: null
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
   getPosts: (state, { payload }: { payload: PostQuery } ) => {
   },
   setPostList: (state, { payload }: { payload: Post[] }) => {
    state.posts = payload;
   },
   getPostDetails: (state, { payload }: { payload: string }) => {
    console.log('initiate post detail query', state.posts.length, payload);
   },
   setPostSingle: (state, { payload }: { payload: Post | null }) => {
    state.post = payload;
   }
  },
});

// Action creators are generated for each case reducer function
export const postSliceActions = postSlice.actions;

export default postSlice.reducer;
