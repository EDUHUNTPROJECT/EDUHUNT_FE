"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Modal, Input } from "antd";
import MainLayout from "../../../components/core/layouts/MainLayout";
import { useParams } from "next/navigation";
import { useApplication } from "../../../hooks/useApplication";
import { useScholarship } from "../../../hooks/useScholarship";

const ScholarshipDetail = () => {
  const [scholarship, setScholarship] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [applicationReason, setApplicationReason] = useState("");
  const { id } = useParams();
  const { getApplication, postApplication, putApplication } = useApplication();
  const { getDetailScholarShip } = useScholarship();
  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await getDetailScholarShip(id);
          setScholarship(response);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }
  }, [id]);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    const studentID = localStorage.getItem("userId");
    const applicationData = {
      StudentID: studentID,
      ScholarshipID: id,
      Status: "wait",
      ApplicationReason: applicationReason || "No reason provided", // Add this line to include the reason in your application data
    };

    try {
      await postApplication(applicationData);
      alert("Application submitted successfully!");
      setIsModalVisible(false);
    } catch (error) {
      console.error(error);
      alert("Failed to submit the application. Please try again.");
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  if (!scholarship) {
    return <div>Loading...</div>;
  }
  const handleApply = (scholarshipID) => {
    console.log("Test Apply");
  };
  return (
    <MainLayout>
      <div className="p-6 bg-[#fff]] rounded-t shadow-md sm:p-8 md:p-12 px-10">
        <h2 className="text-5xl font-bold mb-4">{scholarship.title}</h2>
        <ul className="my-7">
          <li className="mb-1">
            <span className="flex mr-4 text-lg text-[#4b5563] rounded">
              <div className="flex align-middle fill-current text-[#4b5563] mr-1 scale-125">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M18 22a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-6v7L9.5 7.5 7 9V2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12Z"></path>
                </svg>
              </div>
              <p className="text-lg mb-[-2px]">
                Location: {scholarship.location}
              </p>
            </span>
          </li>
          <li className="mb-1">
            <span className="flex mr-4 text-lg text-[#4b5563] rounded">
              <div className="flex align-middle fill-current text-[#4b5563] mr-1 scale-125 pt-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                  <path d="M3 6h18v12H3V6m9 3a3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3M7 8a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2v-4a2 2 0 0 1-2-2H7Z"></path>
                </svg>
              </div>
              <p className="text-lg py-2">Budget: {scholarship.budget}</p>
            </span>
          </li>
          <li className="mb-1">
            <span className="flex mr-4 text-lg text-[#4b5563] rounded mt-[-10px]">
              <div className="flex align-middle fill-current text-[#4b5563] mr-1 scale-125 pt-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="#000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 11.5h1m-1 4h1m10 0h1m-1-4h1m-6.5 0h1M10 21v-4a2 2 0 0 1 4 0v4m3-13.5 1.576.394c.867.217 1.3.325 1.623.567.284.213.507.498.645.826.156.371.156.818.156 1.711V17.8c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C19.48 21 18.92 21 17.8 21H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3 19.48 3 18.92 3 17.8v-6.802c0-.893 0-1.34.156-1.711a2 2 0 0 1 .645-.826c.323-.242.756-.35 1.623-.567L7 7.5l2.86-2.573c.756-.681 1.134-1.022 1.562-1.151a2 2 0 0 1 1.156 0c.428.13.806.47 1.563 1.15L17 7.5Z"
                  />
                </svg>
              </div>
              <p className="text-lg py-2 ml-[1px] mt-[2px]">
                School name: {scholarship.schoolName}
              </p>
            </span>
          </li>
        </ul>
        <div className="">
          <Button
            onClick={showModal}
            style={{
              backgroundColor: "#f95c39",
              color: "white",
              fontSize: "20px",
              width: "200px",
              height: "40px",
            }}
          >
            APPLY
          </Button>
          <Modal
            title="Application Reason"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            okText="Submit Application"
            cancelText="Cancel"
          >
            <Input.TextArea
              rows={4}
              placeholder="Please enter your reason for applying..."
              value={applicationReason}
              onChange={(e) => setApplicationReason(e.target.value)}
            />
          </Modal>
        </div>
        <div className="py-8 text-lg">
          <p classname="">{scholarship.description}</p>
        </div>
      </div>
    </MainLayout>
  );
};

export default ScholarshipDetail;
