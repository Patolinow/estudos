import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';

import PostItem from '../components/PostItem';
import { IPost } from '../interfaces/IPost';

function PostPage() {
  const post = useLoaderData() as IPost

  return <PostItem post={post} />;
}

export default PostPage;

export function loader({ params }:LoaderFunctionArgs) {
  const postId = params.id;
  return fetch('https://jsonplaceholder.typicode.com/posts/' + postId);
}
