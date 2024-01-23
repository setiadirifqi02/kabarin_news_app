import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function Ui() {
  return (
    <div
      className="not-found___container flex flex-col
     items-center justify-center h-full"
    >
      <Image
        src="/images/not-found-2.png"
        width={240}
        height={240}
        alt="Not Found Image"
      />

      <h1 className="headerTitle mb-3">Error Page</h1>
      <p className="font-semibold mb-3">The page you requested not be found</p>
      <Button
        as={Link}
        className="bg-amber-200 text-amber-600 mb-5"
        size="md"
        radius="full"
        href="/"
        variant="flat"
      >
        Go Home
      </Button>
    </div>
  );
}
