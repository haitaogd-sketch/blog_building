import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-8 mb-16 md:mb-12">
      <div className="relative">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-tight md:pr-8 title-neo">
          Blog.
        </h1>
        {/* 装饰性元素 */}
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-neo-pink border-4 border-neo-black rotate-12" />
        <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-neo-blue border-3 border-neo-black -rotate-6" />
      </div>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8 font-medium">
        A statically generated blog example using{" "}
        <a
          href="https://nextjs.org/"
          className="inline-block px-2 py-1 bg-neo-blue border-3 border-neo-black font-bold hover:bg-neo-pink transition-colors duration-150"
        >
          Next.js
        </a>{" "}
        and <span className="font-bold text-neo-purple">{CMS_NAME}</span>.
      </h4>
    </section>
  );
}
