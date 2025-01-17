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
    <div>
      <header className="flex flex-row gap-x-4 p-4 justify-center sticky top-0 z-10 bg-white border-b">
        <div className="font-semibold text-3xl">NEWNEEK</div>
        <div>홈</div>
        <div>시리즈</div>
        <div>그라운드</div>
        <div>아엠뉴</div>
        <div>광고제휴</div>
      </header>
      <div className="px-4 md:border-x md:border-x-gray-100 md:px-9">
        <div className="mx-auto sticky top-16 z-10 bg-white border-b pt-3 mb-5 mx-4 w-full">
          <nav className="flex flex-row gap-x-4 px-4 pb-2">
            <div>전체</div>
            <div>뉴닉</div>
            <div>추천</div>
            <div>팔로잉</div>
            <div>경제</div>
            <div>정치/사회</div>
            <div>문화/트렌드</div>
          </nav>
        </div>
        <main className="flex flex-col items-center gap-8 max-w-[1280px] mx-auto">
          {data.map((item) => (
            <Card {...item} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default main;
