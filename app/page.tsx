import { categories } from "@/constants";
import fetchNews from "@/lib/fetchNews";
import NewsList from "./components/NewsList";

export default async function Home() {
  const news: NewsResponse = await fetchNews("general");
  // console.log(news);
  return (
    <main className="home-paage___container flex min-h-screen flex-col">
      <NewsList news={news} />
    </main>
  );
}
