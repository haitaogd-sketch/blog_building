type Props = {
  preview?: boolean;
};

export default function Alert({ preview }: Props) {
  return (
    <div
      className={`border-4 border-neo-black p-4 mb-8 ${
        preview
          ? "bg-neo-yellow"
          : "bg-neo-blue"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-neo-black flex items-center justify-center text-white font-black">
          !
        </div>
        <span className="font-bold text-lg">
          {preview
            ? "This is a preview of unpublished blog post."
            : "Welcome to this blog!"}
        </span>
      </div>
    </div>
  );
}
