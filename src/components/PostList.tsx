import type { CollectionEntry } from 'astro:content';
import PostCard from './PostCard';

interface PostListProps {
  posts: CollectionEntry<'posts'>[];
}

export default function PostList({ posts }: PostListProps) {
  if (posts.length === 0) {
    return <p className="post-list-empty">No posts yet.</p>;
  }

  return (
    <div className="post-list">
      {posts.map((post, i) => (
        <PostCard key={post.id} post={post} index={i} />
      ))}
    </div>
  );
}
