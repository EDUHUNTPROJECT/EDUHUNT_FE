"use client";

import { Typography } from "antd";
import {
  SearchOutlined,
  TeamOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import Footer from "../common/Footer";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "../common/Header";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const { Text } = Typography;

const MainLayout = ({ children }) => {



  return (
    <div className="font-sans">
      <Header />

      <main className="mx-auto pl-8 pr-8">{children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;
