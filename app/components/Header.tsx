import React, { Children } from "react";

// 상위 Header 컴포넌트
const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row gap-x-4 p-4 justify-center bg-white border-b">
      {children}
    </div>
  );
};

// Header.Logo 컴포넌트
const Logo = ({ children }: { children: React.ReactNode }) => {
  return <div className="font-semibold text-3xl">{children}</div>;
};

// Header.NavItem 컴포넌트
const NavItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="cursor-pointer hover:text-blue-500 transition-colors">
      {children}
    </div>
  );
};

// 정적 속성으로 등록
Header.Logo = Logo;
Header.NavItem = NavItem;

export default Header;
