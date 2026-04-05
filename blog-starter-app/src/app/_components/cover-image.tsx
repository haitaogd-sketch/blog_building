import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn(
        "w-full border-4 border-neo-black transition-all duration-150",
        {
          "hover:shadow-neo-xl hover:-translate-x-1 hover:-translate-y-1": slug,
        }
      )}
      width={1300}
      height={630}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          <div className="relative">
            {image}
            {/* 装饰性边框 */}
            <div className="absolute -top-2 -left-2 w-full h-full border-4 border-neo-black -z-10" />
          </div>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
