import React, { Children } from "react";

// 상위 Nav 컴포넌트
const Nav = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-row gap-x-4 px-4 pb-2">{children}</div>;
};

// Nav.Item 컴포넌트
const Item = ({
  children,
  active = false,
}: {
  children: React.ReactNode;
  active?: boolean;
}) => {
  return (
    <div
      className={`cursor-pointer transition-colors ${
        active ? "text-blue-500 font-bold" : "hover:text-blue-500"
      }`}
    >
      {children}
    </div>
  );
};

// 정적 속성으로 Item 추가
Nav.Item = Item;

export default Nav;
