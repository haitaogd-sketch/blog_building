type Props = {
  children?: React.ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-8 mt-8 title-neo">
      <span className="inline-block px-4 py-2 bg-neo-black text-white border-4 border-neo-black">
        {children}
      </span>
    </h1>
  );
}
