import Link from "next/link";

type AppProps = {
  category: string;
  isActive: boolean;
};

export default function NewsNav({ category, isActive }: AppProps) {
  return (
    <Link
      href={`/news/${category}`}
      className={`navlink ${
        isActive &&
        "news-nav bg-amber-200 text-amber-600 p-1 rounded-full font-semibold text-lg"
      }`}
    >
      {category}
    </Link>
  );
}
