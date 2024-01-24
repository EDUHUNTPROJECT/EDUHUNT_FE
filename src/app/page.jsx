"use client";
import React from "react";
import {
  Breadcrumb,
  theme,
} from "antd";
import MainLayout from "@/components/core/layouts/MainLayout";

const Home = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <MainLayout>
      <Breadcrumb className="my-4">
        <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className={`bg-${colorBgContainer} min-h-280 p-6 rounded-${borderRadiusLG}`}
      >
        Trang chủ
      </div>
    </MainLayout>
  );
};

export default Home;
