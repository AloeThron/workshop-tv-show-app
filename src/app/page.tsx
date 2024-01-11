"use client";

import { useQuery } from "react-query";
import Card, { CardLoading } from "./components/Card";
import { useState } from "react";
import SearchBar from "./components/SearchBar";

type ShowData = {
  name: string;
  image: Image;
};

interface Image {
  medium: string;
  original: string;
}


export default function Home() {
  const [input, setInput] = useState("");

  const api = "https://api.tvmaze.com/shows";

  const {
    isLoading,
    error,
    data: moviesData,
  } = useQuery<ShowData[]>("moviesData", () =>
    fetch(api).then((res) => res.json())
  );

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  const data = input
    ? moviesData?.filter((idata) =>
        idata.name.toLowerCase().includes(input.toLowerCase())
      )
    : moviesData;

  return (
    <div className="p-8 max-w-7xl flex flex-col gap-5  mx-auto">
      <h2 className="text-4xl font-semibold text-center">TV Shows </h2>
      {/* searchbar */}
      <div className="flex w-full justify-center ">
        <SearchBar onChange={handleChange} value={input} className="" />
      </div>
      <div className="flex flex-wrap gap-3 justify-between">
        {isLoading
          ? Array(12)
              .fill(null)
              .map((_, index) => <CardLoading key={index} />)
          : data?.map((idata, index) => (
              <Card key={index} image={idata.image.medium} name={idata.name} />
            ))}
      </div>
    </div>
  );
}
