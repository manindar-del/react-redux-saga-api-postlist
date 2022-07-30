/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../../Lib/Store/hooks';
import { postSliceActions } from '../../../../Lib/Store/Post/Post.slice';

export default function PostDetailsPage() {
  const { id } = useParams() as { id: string } ;
  const dispatch = useDispatch();
  const post = useAppSelector(( state ) => state.post.post);

  useEffect(() => {
    dispatch(postSliceActions.getPostDetails(id));
  
    return () => {
      dispatch(postSliceActions.setPostSingle(null));
    };
  }, [id]);
  

  return (
    <div>
      <h1 className='text-6xl mt-4 mb-7'>
        {post?.title}
      </h1>
      <div className="prose lg:prose-xl"  dangerouslySetInnerHTML={{ __html: String(post?.body) }}>
        
      </div>

    </div>
  );
}