"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
export default function SearchBox() {
  const [input, setInput] = useState("");
  const router = useRouter();

  const searchHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return;

    router.push(`/search?term=${input}`);
  };
  return (
    <form
      onSubmit={searchHandler}
      className="search-box__form max-w-4xl flex mx-auto justify-between 
      items-center px-2 mb-4 md:px-6 gap-2 md:gap-7 text-xs md:text-lg"
    >
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search any News..."
        className="w-full h-10 rounded-sm  placeholder-gray-500 
        text-gray-500 outline-none flex-1 bg-transparent border-b-2 
        px-2 md:px-4 dark:border-b-2 dark:border-amber-600 dark:text-amber-600"
      />
      <button
        type="submit"
        disabled={!input}
        className="text-amber-600 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}
