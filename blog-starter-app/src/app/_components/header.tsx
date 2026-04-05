import Link from "next/link";

const Header = () => {
  return (
    <header className="border-b-4 border-neo-black py-6 mb-12">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl md:text-5xl font-black tracking-tight md:tracking-tighter leading-tight title-neo">
          <Link href="/" className="hover:underline">
            Blog
          </Link>
          <span className="text-neo-pink">.</span>
        </h2>
        {/* 装饰性线条 */}
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-neo-blue border-2 border-neo-black" />
          <div className="w-3 h-3 bg-neo-yellow border-2 border-neo-black" />
          <div className="w-3 h-3 bg-neo-pink border-2 border-neo-black" />
        </div>
      </div>
    </header>
  );
};

export default Header;
