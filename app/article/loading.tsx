import { Skeleton } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="loading___container mt-10 h-screen pb-24 px-6 lg:px-10">
      <div
        role="status"
        className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-start"
      >
        <Skeleton>
          <div className="flex items-center justify-center w-full h-48 bg-secondary rounded sm:w-96 dark:bg-default-200"></div>
        </Skeleton>
        <div className="w-full">
          <Skeleton className="rounded-lg w-3/5 my-5">
            <div className="h-2  rounded-full  w-48 mb-4"></div>
          </Skeleton>
          <Skeleton className="rounded-lg w-4/5 my-2">
            <div className="h-1  rounded-full mb-2.5"></div>
          </Skeleton>
          <Skeleton className="rounded-lg w-4/5 my-2">
            <div className="h-1  rounded-full mb-2.5"></div>
          </Skeleton>
          <Skeleton className="rounded-lg w-4/5 my-2">
            <div className="h-1  rounded-full mb-2.5"></div>
          </Skeleton>
          <Skeleton className="rounded-lg w-2/5 my-2">
            <div className="h-1  rounded-full mb-2.5"></div>
          </Skeleton>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
