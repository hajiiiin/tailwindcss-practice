"use client";

import { useEffect, useState } from "react";
import Card, { CardProps } from "./components/Card";

function main() {
  const [data, setData] = useState<CardProps[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <main className="flex flex-col items-center gap-8 py-16 max-w-[1280px] mx-auto">
      {data.map((item) => (
        <Card {...item} />
      ))}
    </main>
  );
}

export default main;
