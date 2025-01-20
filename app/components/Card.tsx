import React, { Children } from "react";

export interface CardProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// 상위 Card 컴포넌트
const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-1 pb-4 border-b mb-4 h-120">{children}</div>;
};

// Card.Image 컴포넌트
const Image = () => {
  return (
    <div className="border-2 rounded-lg p-5 w-40 h-40 m-3 flex-shrink-0">
      image
    </div>
  );
};

// Card.Content 컴포넌트
const Content = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col items-start gap-4 py-2">{children}</div>;
};

// Card.Title 컴포넌트
const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="line-clamp-2 text-xl font-bold text-gray-900">{children}</h2>
  );
};

// Card.Description 컴포넌트
const Description = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-gray-900">{children}</p>;
};

// 정적 속성으로 등록
Card.Image = Image;
Card.Content = Content;
Card.Title = Title;
Card.Description = Description;

export default Card;
