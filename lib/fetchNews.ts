import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";

const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  // GraphQl
  const query = gql`
    query myQuery(
      $access_key: String
      $countries: String
      $keywords: String
      $categories: String
    ) {
      myQuery(
        access_key: $access_key
        countries: $countries
        keywords: $keywords
        categories: $categories
      ) {
        data {
          author
          category
          country
          description
          image
          language
          source
          published_at
          title
          url
        }
        pagination {
          count
          limit
          offset
          total
        }
      }
    }
  `;
  const variables = {
    access_key: process.env.MEDIASTACK_API,
    countries: "in,us,gb",
    keywords: keywords,
    categories: category,
  };

  // Fetch News Mediastack Api through StepZen
  const res = await fetch(
    "https://riomaria.stepzen.net/api/irreverent-fly/__graphql",
    {
      method: "POST",
      cache: isDynamic ? "no-cache" : "default",
      next: isDynamic ? { revalidate: 0 } : { revalidate: 20 },
      headers: {
        "Content-Type": "application/json",
        Authorization: `APIkey ${process.env.STEPZEN_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        variables: variables,
      }),
    }
  );
  const mediastack = process.env.MEDIASTACK_API;
  // console.log("loading new data from api for category", category, mediastack);
  const newsResponse = await res.json();
  // Sort News By Image
  const news = sortNewsByImage(newsResponse.data.myQuery);
  return news;
};

export default fetchNews;

//  stepzen import curl "http://api.mediastack.com/v1/news?access_key=7mediastackapikey"
