"use client";

import React, { useEffect, useState } from "react";
import { Avatar, Badge, Divider, Input, Menu } from "antd";
import type { MenuProps } from "antd";
import Image from "next/image";
import SiderItem from "./SiderItem";
import { contactPreviewInterface } from "../../../models/user";
import { SearchOutlined } from "@ant-design/icons";

interface IProps {
  users: contactPreviewInterface[];
}

function Sider({ users }: IProps) {
  return (
    <div className="flex flex-col max-w-80 max-h-[calc(100vh-186px)] overflow-auto bg-white border-[1px] border-r-0">
      <div className="p-4 border-b-[1px]">
        <Input
          size="middle"
          placeholder="Tìm liên hệ..."
          prefix={<SearchOutlined />}
        />
      </div>
      {users.map((item, index) => (
        <SiderItem key={index} information={item}></SiderItem>
      ))}
    </div>
  );
}

export default Sider;
