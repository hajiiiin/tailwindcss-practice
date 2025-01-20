"use client";

import { useEffect, useState } from "react";
import Card, { CardProps } from "../components/Card";
import Nav from "../components/Nav";
import Header from "../components/Header";

function Series() {
  const [data, setData] = useState<CardProps[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      <div className="sticky top-0 z-10">
        <Header>
          <Header.Logo>NEWNEEK</Header.Logo>
          <Header.NavItem>홈</Header.NavItem>
          <Header.NavItem>시리즈</Header.NavItem>
          <Header.NavItem>그라운드</Header.NavItem>
          <Header.NavItem>아엠뉴</Header.NavItem>
          <Header.NavItem>광고제휴</Header.NavItem>
        </Header>

        <div className="mx-auto z-10 bg-white border-b pt-3 mb-5 mx-4 w-full">
          <Nav>
            <Nav.Item active>전체</Nav.Item>
            <Nav.Item>뉴닉</Nav.Item>
            <Nav.Item>추천</Nav.Item>
            <Nav.Item>팔로잉</Nav.Item>
            <Nav.Item>경제</Nav.Item>
            <Nav.Item>정치/사회</Nav.Item>
            <Nav.Item>문화/트렌드</Nav.Item>
          </Nav>
        </div>
      </div>
      <div className="px-4 md:border-x md:border-x-gray-100 md:px-9">
        <main className="flex flex-col items-center gap-8 max-w-[1280px] mx-auto">
          {data.map((item, index) => (
            <Card key={index}>
              <Card.Image />
              <Card.Content>
                <Card.Title>{item.title}</Card.Title>
                <Card.Description>{item.body}</Card.Description>
              </Card.Content>
            </Card>
          ))}
        </main>
      </div>
    </div>
  );
}

export default Series;
