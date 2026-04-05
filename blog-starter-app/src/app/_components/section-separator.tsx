export function SectionSeparator() {
  return (
    <div className="my-16 flex items-center justify-center gap-4">
      <div className="h-2 flex-1 bg-neo-black" />
      <div className="w-6 h-6 bg-neo-pink border-4 border-neo-black rotate-45" />
      <div className="w-4 h-4 bg-neo-blue border-3 border-neo-black" />
      <div className="w-6 h-6 bg-neo-yellow border-4 border-neo-black -rotate-12" />
      <div className="h-2 flex-1 bg-neo-black" />
    </div>
  );
}
