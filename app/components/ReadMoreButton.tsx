"use client";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

type AppProps = {
  article: Article;
};

export default function ReadMoreButton({ article }: AppProps) {
  const router = useRouter();

  const handleReadMore = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");

    const url = `/article?${queryString}`;
    console.log(url);
    router.push(url);
  };
  return (
    <Button
      className="readmore__button absolute bottom-[130px] md:bottom-[120px] 
      right-3 text-tiny text-amber-600 bg-amber-200"
      variant="flat"
      color="default"
      radius="full"
      size="sm"
      role="button"
      onClick={handleReadMore}
    >
      Read More
    </Button>
  );
}
