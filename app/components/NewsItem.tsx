import { Card, CardHeader, Button, CardFooter } from "@nextui-org/react";
import LiveTimeStamp from "./LiveTimeStamp";
import ReadMoreButton from "./ReadMoreButton";

type props = {
  article: Article;
};

export default function NewsItem({ article }: props) {
  return (
    <Card
      className="news-item__container h-[280px] md:h-[260px]
       bg-gray-100 hover:p-2 hover:scale-110 hover:shadow-lg
        transition-all ease-in-out duration-1000"
      isBlurred
      shadow="none"
    >
      {article.image === null ? (
        <img
          alt="Card background"
          className="relative object-cover h-40 md:h-42
          w-full rounded-xl"
          src="/images/article-image.jpg"
        />
      ) : (
        <img
          alt="Card background"
          className="relative object-cover h-40 md:h-42
          w-full rounded-xl"
          src={article.image}
        />
      )}

      <CardHeader className="pb-0 pt-2 px-0  flex-col items-start">
        <p className="text-tiny capitalize font-bold">{article.author}</p>
        <small className="text-default-500">
          <LiveTimeStamp time={article.published_at} />
        </small>
        <h4 className="font-bold text- leading-6 capitalize text-left line-clamp-2">
          {article.title}
        </h4>
      </CardHeader>
      <CardFooter>
        <ReadMoreButton article={article} />
      </CardFooter>
    </Card>
  );
}
