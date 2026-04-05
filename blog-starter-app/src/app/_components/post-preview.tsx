import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div className="card-neo p-6 card-neo-hover">
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl mb-3 font-black title-neo leading-tight">
        <Link 
          href={`/posts/${slug}`} 
          className="hover:bg-neo-yellow px-1 -mx-1 border-4 border-transparent hover:border-neo-black transition-all duration-150"
        >
          {title}
        </Link>
      </h3>
      <div className="text-lg mb-4 font-bold">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
}
