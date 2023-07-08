import { useEffect, useState } from 'react';

interface IPostProps {
  userId: number;
  id:     number;
  title:  string;
  body:   string;
}

const Async = () => {
  const [posts, setPosts] = useState<IPostProps[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Async;
