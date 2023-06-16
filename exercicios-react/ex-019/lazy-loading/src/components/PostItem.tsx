import { IPost } from '../interfaces/IPost';
import classes from './PostItem.module.css';

interface IPostItemProps {
  post: IPost
}
function PostItem({ post }:IPostItemProps) {
  return (
    <article className={classes.item}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}

export default PostItem;
