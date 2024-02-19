'use client'

import {
  Typography,
} from "antd";
import {
  SearchOutlined,
  TeamOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import Footer from "../common/Footer";
import React, { useState, useEffect } from 'react'; // Correct import statement
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Header from "../common/Header";

const { Text } = Typography;
const items = [
  {
    label: <Link href={"/"} className="no-underline block lg:inline-block lg:mt-7 text-black hover:border-b-2 text-center w-200">HOME</Link>,
    labelhighlight: <Link href={"/"} className="no-underline block lg:inline-block lg:mt-7 text-black border-b-2 text-center w-200 font-bold">HOME</Link>,
    key: "0",
    icon: <SearchOutlined />,
  },
  {
    label: <Link href={"/profile"} className="no-underline block lg:inline-block lg:mt-7 text-black hover:border-b-2 text-center w-200">PROFILE</Link>,
    labelhighlight: <Link href={"/profile"} className="no-underline block lg:inline-block lg:mt-7 text-black border-b-2 text-center w-200 font-bold">PROFILE</Link>,
    key: "1",
    icon: <SearchOutlined />,
  },
  {
    label: <Link href={"/mentor"} className="no-underline block lg:inline-block lg:mt-7 text-black hover:border-b-2 text-center w-200">MENTOR</Link>,
    labelhighlight: <Link href={"/mentor"} className="no-underline block lg:inline-block lg:mt-7 text-black border-b-2 text-center w-200 font-bold">MENTOR</Link>,
    key: "2",
    icon: <TeamOutlined />,
  },
  {
    label: <Link href={"/message"} className="no-underline block mr-10 lg:inline-block lg:mt-7 text-black hover:border-b-2 text-center w-200">CHAT</Link>,
    labelhighlight: <Link href={"/message"} className="no-underline block mr-10 lg:inline-block lg:mt-7 text-black border-b-2 text-center w-200 font-bold">CHAT</Link>,
    key: "3",
    icon: <MessageOutlined />,
  },
];

const MainLayout = ({ children }) => {
  const pathName = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Correct usage of useState

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  const HighlightKey = () => {
    if (pathName === "/") {
      return 0;
    } else if (pathName === "/profile") {
      return 1;
    } else if (pathName === "/mentor") {
      return 2;
    } else if (pathName === "/message") {
      return 3;
    } else return 0;
  };

  return (
    <div className="font-sans">
        <Header/>

      <main className="mx-auto pl-8 pr-8">{children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;
