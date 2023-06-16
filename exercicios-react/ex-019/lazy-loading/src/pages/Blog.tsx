import { useLoaderData } from 'react-router-dom';

import PostList from '../components/PostList';
import { IPost } from '../interfaces/IPost';

function BlogPage() {
  const posts = useLoaderData() as IPost[]
  return <PostList posts={posts} />;
}

export default BlogPage;

export function loader() {
  return fetch('https://jsonplaceholder.typicode.com/posts');
}
