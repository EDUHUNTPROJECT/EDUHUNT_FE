"use client";
import React from "react";
import { theme } from "antd";
import MainLayout from "../../components/core/layouts/MainLayout";
import { CandidateData } from "../../components/data/candidatedata";
import CandidateCard from "../../components/modules/talentsModule/Card/CandidateCard";
import Searchbar from "../../components/modules/talentsModule/SearchBar/SearchBar";

const Talents: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <MainLayout>
      <div
        style={{
          background: colorBgContainer,
          minHeight: 280,
          padding: 24,
          borderRadius: borderRadiusLG,
        }}
      >
        <div className="bg-white  p-8 rounded-lg mb-6">
          <h1 className="text-4xl text-yellow-300 font-bold mb-2">
            Danh sách ứng viên
          </h1>
          <Searchbar></Searchbar>

          <div className="flex flex-wrap">
            {CandidateData.map((candidate) => (
              <CandidateCard key={candidate.candidateId} {...candidate} />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Talents;
