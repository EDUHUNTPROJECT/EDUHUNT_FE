"use client";
import React from "react";
import {
  Breadcrumb,
  theme,
} from "antd";
import MainLayout from "../components/core/layouts/MainLayout";
import Slider from "../components/core/common/Slider.jsx";
import GridSlide from "../components/core/common/GridSlide";
import GridItem from "../components/core/common/GridItem";

const Home = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <MainLayout>
        <Slider />
        <GridSlide/>
        <GridItem></GridItem>
    </MainLayout>
  );
};

export default Home;
