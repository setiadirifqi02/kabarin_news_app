import { Card, Skeleton } from "@nextui-org/react";

const cardsItems = [1, 2, 3, 4, 5, 6];

export default function Loading() {
  return (
    <div
      className="loading___container grid grid-cols-1 
    md:grid-cols-2 lg:grid-cols-3 p-5 md:p-10 gap-5 md:gap-10"
    >
      {cardsItems.map((item) => (
        <Card
          key={item}
          className="w-[270px] md:w-[320px] lg:w-[270px] 
          space-y-5 p-4 bg-transparent"
          shadow="none"
          radius="lg"
        >
          <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg bg-default-300"></div>
          </Skeleton>
          <div className="space-y-3">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg">
              <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
        </Card>
      ))}
    </div>
  );
}
