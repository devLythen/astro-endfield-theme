import type { CollectionEntry } from 'astro:content';

interface PostCardProps {
  post: CollectionEntry<'posts'>;
  index: number;
}

export default function PostCard({ post, index }: PostCardProps) {
  const { title, date, description, tags } = post.data;
  const num = String(index + 1).padStart(2, '0');

  return (
    <article className="post-card">
      <a href={`/posts/${post.id}`} className="post-card-link">
        {/* Title row */}
        <div className="post-card-head">
          <span className="post-card-index">{num}</span>
          <h2 className="post-card-title">{title}</h2>
          <span className="post-card-label">TITLE</span>
        </div>

        {/* Meta row */}
        <div className="post-card-meta">
          {date && (
            <time className="post-card-date" dateTime={date.toISOString()}>
              {date.toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' })}
            </time>
          )}
          {description && <span className="post-card-desc">{description}</span>}
        </div>

        {/* Tags row */}
        {tags.length > 0 && (
          <ul className="post-card-tags">
            {tags.map((tag) => (
              <li key={tag} className="post-card-tag">{tag}</li>
            ))}
          </ul>
        )}
      </a>
    </article>
  );
}
