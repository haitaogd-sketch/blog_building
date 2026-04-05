import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
};

export function MoreStories({ posts }: Props) {
  return (
    <section>
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight title-neo">
          More Stories
        </h2>
        {/* 装饰线 */}
        <div className="flex-1 h-4 bg-neo-black" />
        {/* 装饰方块 */}
        <div className="w-8 h-8 bg-neo-green border-4 border-neo-black rotate-12" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-12 md:gap-y-16 mb-32">
        {posts.map((post, index) => (
          <div 
            key={post.slug}
            className={index % 2 === 0 ? 'translate-y-4' : ''}
          >
            <PostPreview
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
