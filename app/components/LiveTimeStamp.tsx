"use client";
import TimeAgo from "react-timeago";

type AppProps = {
  time: string;
};

export default function LiveTimeStamp({ time }: AppProps) {
  return <TimeAgo date={time} />;
}
