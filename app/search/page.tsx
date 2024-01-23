import NewsList from "../components/NewsList";
import fetchNews from "@/lib/fetchNews";

type AppProps = {
  searchParams?: { term: string };
};

export default async function SearchPage({ searchParams }: AppProps) {
  const news: NewsResponse = await fetchNews(
    "general",
    searchParams?.term,
    true
  );
  return (
    <div className="search-page___container">
      <h1 className="headerTitle">Search Resultss for: {searchParams?.term}</h1>
      <NewsList news={news} />
    </div>
  );
}
