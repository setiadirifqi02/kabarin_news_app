import NewsItem from "./NewsItem";

type Approps = {
  news: NewsResponse;
};

export default function NewsList({ news }: Approps) {
  return (
    <main
      className="news-list__contaiener grid grid-cols-1 
    md:grid-cols-2 lg:grid-cols-3 p-10 gap-10 text-amber-600"
    >
      {news.data.map((article) => (
        <NewsItem key={`${article.title}`} article={article} />
      ))}
    </main>
  );
}
