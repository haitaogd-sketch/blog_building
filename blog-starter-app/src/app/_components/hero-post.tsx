import Avatar from "@/app/_components/avatar";
import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div className="relative">
          {/* 标签装饰 */}
          <div className="absolute -top-4 -left-4 bg-neo-pink border-4 border-neo-black px-3 py-1 font-black text-sm uppercase -rotate-2">
            Latest Post
          </div>
          <h3 className="mb-4 text-4xl lg:text-5xl font-black leading-tight title-neo">
            <Link 
              href={`/posts/${slug}`} 
              className="inline-block px-2 -mx-2 bg-neo-yellow border-4 border-neo-black hover:bg-neo-blue transition-colors duration-150"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div className="relative">
          {/* 装饰性背景 */}
          <div className="absolute -inset-4 bg-stripe -z-10" />
          <div className="bg-white border-4 border-neo-black p-6 shadow-neo">
            <p className="text-lg leading-relaxed mb-4 font-medium">{excerpt}</p>
            <div className="mt-4">
              <Avatar name={author.name} picture={author.picture} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
