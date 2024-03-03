"use client";
import React from "react";
import {
  SearchOutlined,
  TeamOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Avatars from "./Avatar";
import { useState, useEffect } from "react";

const NavBar = () => {
  const pathName = usePathname();
  const [role, setRole] = useState(null);

  const items = [
    {
      label: (
        <Link
          href={"/"}
          className="no-underline block lg:inline-block lg:mt-7 text-black hover:border-b-2 text-center w-200"
        >
          HOME
        </Link>
      ),
      labelhighlight: (
        <Link
          href={"/"}
          className="no-underline block lg:inline-block lg:mt-7 text-black border-b-2 text-center w-200 font-bold"
        >
          HOME
        </Link>
      ),
      key: "0",
      icon: <SearchOutlined />,
    },
    {
      label: (
        <Link
          href={"/scholarship"}
          className="no-underline block lg:inline-block lg:mt-7 text-black hover:border-b-2 text-center w-200"
        >
          SCHOLARSHIP
        </Link>
      ),
      labelhighlight: (
        <Link
          href={"/scholarship"}
          className="no-underline block lg:inline-block lg:mt-7 text-black border-b-2 text-center w-200 font-bold"
        >
          SCHOLARSHIP
        </Link>
      ),
      key: "1",
      icon: <SearchOutlined />,
    },
    {
      label: (
        <Link
          href={"/mentor"}
          className="no-underline block lg:inline-block lg:mt-7 text-black hover:border-b-2 text-center w-200"
        >
          MENTOR
        </Link>
      ),
      labelhighlight: (
        <Link
          href={"/mentor"}
          className="no-underline block lg:inline-block lg:mt-7 text-black border-b-2 text-center w-200 font-bold"
        >
          MENTOR
        </Link>
      ),
      key: "2",
      icon: <TeamOutlined />,
    },
    {
      label: (
        <Link
          href={role === "Mentor" ? "/roadmap" : "/post"}
          className="no-underline block mr-10 lg:inline-block lg:mt-7 text-black hover:border-b-2 text-center w-200"
        >
          {role === "Mentor" ? "ROADMAP" : "POST"}
        </Link>
      ),
      labelhighlight: (
        <Link
          href={role === "Mentor" ? "/roadmap" : "/post"}
          className="no-underline block mr-10 lg:inline-block lg:mt-7 text-black border-b-2 text-center w-200 font-bold"
        >
          {role === "Mentor" ? "ROADMAP" : "POST"}
        </Link>
      ),
      key: "3",
      icon: <MessageOutlined />,
    },
  ];

  useEffect(() => {
    const userRole = localStorage.getItem("role");
    setRole(userRole);
  }, []);
  const HighlightKey = () => {
    if (pathName === "/") {
      return 0;
    } else if (pathName === "/scholarship") {
      return 1;
    } else if (pathName === "/mentor") {
      return 2;
    } else if (pathName === "/roadmap" && role === "Mentor") {
      return 3;
    } else if (pathName === "/post" && role !== "Mentor") {
      return 3;
    } else return 0;
  };

  return (
    <nav className="max-h-28 flex items-center justify-between flex-wrap p-6 z-10">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-extrabold text-6xl tracking-tight text-brown">
          EDU HUNT
        </span>
      </div>
      <div className="flex-grow lg:flex ">
        <div className="lg:flex-grow">
          <div className="flex items-center justify-center">
            {items.map((item, index) => {
              if (HighlightKey() == item.key) {
                return (
                  <React.Fragment key={index}>
                    {item.labelhighlight}
                  </React.Fragment>
                );
              }
              return <React.Fragment key={index}>{item.label}</React.Fragment>;
            })}
          </div>
        </div>
      </div>
      <div className="z-10" style={{}}>
        <Avatars></Avatars>
      </div>
    </nav>
  );
};

export default NavBar;
