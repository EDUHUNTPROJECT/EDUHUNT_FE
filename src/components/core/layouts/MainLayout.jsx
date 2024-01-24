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
        <div className="container mx-auto flex justify-between items-center p-4">
          <Link href={"/"}>
            <div className="flex items-center cursor-pointer">
              <img
                src={"/images/logo.png"}
                alt=""
                className="w-10 h-10"
              />
              <Text
                strong
                color="link"
                className="ml-2 text-blue-500 text-lg"
              >
                EDUHUNT
              </Text>
            </div>
          </Link>

          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={[`${HighlightKey()}`]}
            items={items}
            className="flex-grow"
          />

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Badge dot>
                <BellOutlined className="text-xl cursor-pointer" />
              </Badge>
            </div>
            <Dropdown
              overlay={
                <Menu>
                  {authitems.map((item) => (
                    <Menu.Item key={item.key}>{item.label}</Menu.Item>
                  ))}
                </Menu>
              }
              placement="bottomRight"
              arrow
            >
              <div className="relative">
                <Avatar
                  src={<img src={"/images/avatar.png"} alt="avatar" className="w-10 h-10" />}
                  size={"large"}
                />
              </div>
            </Dropdown>

          </div>
        </div>
      </header>

      <main className="container mx-auto p-4">{children}</main>

      <footer className="text-center p-4">
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </footer>
    </div>
  );
};

export default MainLayout;
