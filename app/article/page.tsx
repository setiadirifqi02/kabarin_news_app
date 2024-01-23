import ErrorPage from "../not-found";
import LiveTimeStamp from "../components/LiveTimeStamp";

type AppProps = {
  searchParams?: Article;
};

export default function ArticlePage({ searchParams }: AppProps) {
  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return <ErrorPage />;
  }
  const article: Article = searchParams;
  return (
    <article className="article-page____container mt-10 h-screen">
      <section className="flex flex-col lg:flex-row pb-24 px-6 lg:px-10">
        {article.image === null ? (
          <img
            alt="News Image"
            className="h-50 max-w-64 mx-auto md:max-w-md
          lg:max-w-lg object-cover rounded-lg shadow-md mb-5"
            src="/images/article-image.jpg"
          />
        ) : (
          <img
            alt={article.title}
            className="h-50 max-w-64 mx-auto md:max-w-md
          lg:max-w-lg object-cover rounded-lg shadow-md mb-5"
            src={article.image}
          />
        )}
        <div className="px-3 md:px-5">
          <h1 className="headerTitle px-0 no-underline pb-2">
            {article.title}
          </h1>
          <div className="flex divide-x-2 space-x-4">
            <h2 className="font-bold">
              By:{" "}
              {article.author === undefined ? "Unknown" : `${article.author}`}
            </h2>
            <h2 className="font-bold pl-4">
              Source:{" "}
              {article.source === undefined ? "Unknown" : `${article.source}`}
            </h2>
            <p className="pl-4">
              <LiveTimeStamp time={article.published_at} />
            </p>
          </div>
          <p className="pt-4">{article.description}</p>
        </div>
      </section>
    </article>
  );
}
