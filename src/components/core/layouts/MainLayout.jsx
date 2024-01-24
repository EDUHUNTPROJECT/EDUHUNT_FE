import React from "react";
import { ReactNode } from "react";
import {
  Avatar,
  Badge,
  Menu,
  Dropdown,
  Typography,
} from "antd";
const { Text } = Typography;
import {
  SearchOutlined,
  TeamOutlined,
  MessageOutlined,
  BellOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    label: <Link href={"/profile"}>PROFILE</Link>,
    key: "0",
    icon: <SearchOutlined />,
  },
  {
    label: <Link href={"/mentor"}>Mentor</Link>,
    key: "1",
    icon: <TeamOutlined />,
  },
  {
    label: <Link href={"/message"}>CHAT</Link>,
    key: "2",
    icon: <MessageOutlined />,
  },
];
const authitems = [
  {
    label: <Link href={"/login"}>LOGIN</Link>,
    key: "0",
    icon: <SearchOutlined />,
  },
  {
    label: <Link href={"/mentor"}>SINGUP</Link>,
    key: "1",
    icon: <TeamOutlined />,
  },
];

const MainLayout = ({ children }) => {
  const pathName = usePathname();

  const HighlightKey = () => {
    if (pathName === "/profile") {
      return 0;
    } else if (pathName === "/tai-nang") {
      return 1;
    } else if (pathName === "/lien-he") {
      return 2;
    } else return 0;
  };

  console.log(pathName);
  console.log(HighlightKey());

  return (
    <div className="font-sans">
      <header className="bg-white shadow">
        <nav className="flex items-center justify-between flex-wrap p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-extrabold text-6xl tracking-tight text-brown">EDU HUNT</span>
          </div>
          <div className="flex-grow lg:flex ">
            <div className="lg:flex-grow">
              <div className="flex items-center justify-center">
                <a href="#responsive-header" className="no-underline block lg:inline-block lg:mt-7 text-black hover:border-b-2 text-center w-200">
                  Home
                </a>
                <a href="#responsive-header" className="no-underline block lg:inline-block lg:mt-7 text-black hover:border-b-2 text-center w-200">
                  Hahahaha
                </a>
                <a href="#responsive-header" className="no-underline block lg:inline-block lg:mt-7 text-black hover:border-b-2 text-center w-200">
                  News
                </a>
                <a href="#responsive-header" className="no-underline block mr-10 lg:inline-block lg:mt-7 text-black hover:border-b-2 text-center w-200">
                  Contact
                </a>
              </div>
            </div>
            
            
          </div>
          <div className="mt-8 m-right-40px">
              <div className="flex h-8 w-24 justify-center items-center rounded"  style={{background: '#67D0FD', color: 'white'}}>
                <Link href="/login" className="mr-1">Sign In</Link>
                <svg class="h-4 w-4"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
            </div>
        </nav>
        <div></div>
      </header>

      <main className="container mx-auto p-4">{children}</main>

      <footer className="text-center p-4">
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </footer>
    </div>
  );
};

export default MainLayout;
