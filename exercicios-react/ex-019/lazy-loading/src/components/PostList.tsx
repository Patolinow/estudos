import { Link } from 'react-router-dom';

import classes from './PostList.module.css';
import { IPost } from '../interfaces/IPost';

interface PostListProps {
  posts: IPost[]
}

function PostList({ posts }:PostListProps) {
  return (
    <ul className={classes.list}>
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={post.id.toString()}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default PostList;
