import NewsList from "@/app/components/NewsList";
import { categories } from "@/constants";
import fetchNews from "@/lib/fetchNews";

type AppProps = {
  params: { category: Category };
};

export default async function NewsCategory({ params: { category } }: AppProps) {
  const news = await fetchNews(category);

  return (
    <div className="newslist-category-page__container">
      <h1 className="headerTitle">{category}</h1>
      <NewsList news={news} />
    </div>
  );
}

export async function generateStaticParams() {
  return categories.map((category) => ({ category: category }));
}
