'use client'
import { ReactNode } from "react";
import {
  Avatar,
  Badge,
  Menu,
  Dropdown,
  Typography,
} from "antd";
import {
  SearchOutlined,
  TeamOutlined,
  MessageOutlined,
  BellOutlined,
} from "@ant-design/icons";
import Footer from "../common/Footer";
import React, { useState, useEffect } from 'react'; // Correct import statement
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const { Text } = Typography;
const items = [
  {
    label: <Link href={"/"} className="no-underline block lg:inline-block lg:mt-7 text-black hover:border-b-2 text-center w-200">HOME</Link>,
    labelhighlight: <Link href={"/home"} className="no-underline block lg:inline-block lg:mt-7 text-black border-b-2 text-center w-200 font-bold">HOME</Link>,
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

  console.log(pathName);
  console.log(HighlightKey());

  return (
    <div className="font-sans">
        <nav className="flex items-center justify-between flex-wrap p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-extrabold text-6xl tracking-tight text-brown">EDU HUNT</span>
          </div>
          <div className="flex-grow lg:flex ">
            <div className="lg:flex-grow">
              <div className="flex items-center justify-center">
                {items.map((item) => {
                  if(HighlightKey() == item.key) {
                    return item.labelhighlight
                  }
                  return (
                    item.label
                  )
                })}
              </div>
            </div>
            
            
          </div>
           


            {isAuthenticated ? (
          <div className="mt-8 m-right-40px" style={{color: 'white'}}>
            <div className="flex h-8 w-24 justify-center items-center rounded" style={{background: '#67D0FD'}}>
              <button onClick={handleLogout}>Log Out</button>
            </div>
          </div>
        ) : (
          <div className="mt-8 m-right-40px" style={{color: 'white'}}>
            <div className="flex h-8 w-24 justify-center items-center rounded"  style={{background: '#67D0FD'}}>
              <Link href="/login" className="mr-1">Sign In</Link>
              <svg className="h-4 w-4"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
            </div>
          </div>
        )}
        </nav>

      <main className="mx-auto pl-8 pr-8">{children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;
