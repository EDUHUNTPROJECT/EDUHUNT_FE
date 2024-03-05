"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Modal, Input } from "antd";
import MainLayout from "../../../components/core/layouts/MainLayout";
import { useParams } from "next/navigation";
import { useApplication } from "../../../hooks/useApplication";

const ScholarshipDetail = () => {
  const [scholarship, setScholarship] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [applicationReason, setApplicationReason] = useState("");
  const { id } = useParams();
  const { postApplication } = useApplication();

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://localhost:7292/api/ScholarshipInfoes/${id}`);
          setScholarship(response.data);
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

  return (
    <MainLayout>
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold">{scholarship.title}</h2>
        <Button onClick={showModal}>APPLY</Button>
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
        <p>{scholarship.description}</p>
        <p>School Name: {scholarship.schoolName}</p>
        <p>Location: {scholarship.location}</p>
        <p>Budget: {scholarship.budget}</p>
        <a href={scholarship.url} target="_blank" rel="noopener noreferrer">
          Link to scholarship
        </a>
      </div>
    </MainLayout>
  );
};

export default ScholarshipDetail;
