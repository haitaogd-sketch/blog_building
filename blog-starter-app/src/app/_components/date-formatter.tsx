type Props = {
  dateString: string;
};

export default function DateFormatter({ dateString }: Props) {
  const date = new Date(dateString);
  return (
    <time dateTime={date.toISOString()}>
      {date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </time>
  );
}
