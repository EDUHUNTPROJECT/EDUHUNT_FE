"use client";
import React, { useState, useEffect } from "react";
import { Button, Table, Popconfirm, message } from "antd";
import { useScholarship } from "../../../hooks/useScholarship";
import AdminLayout from "../../../components/core/layouts/AdminLayout";
import { useRouter } from "next/navigation";

const ApproveScholarshipPage = () => {
  const { getScholarship, approveScholarship } = useScholarship();
  const [scholarshipData, setScholarshipData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "Admin") {
      router.push("/");
    }
    const fetchData = async () => {
      try {
        const data = await getScholarship();
        const unapprovedScholarships = data.filter(
          (scholarship) => !scholarship.isApproved
        );
        setScholarshipData(unapprovedScholarships);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleApprove = async (id, isApproved) => {
    try {
      console.log(id, isApproved);
      await approveScholarship(id, isApproved);
      setScholarshipData(scholarshipData.filter((item) => item.id !== id));
      message.success("Scholarship approved successfully");
    } catch (error) {
      console.error(error);
      message.error("Failed to approve scholarship");
    }
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Popconfirm
          title="Do you want to approve this scholarship?"
          onConfirm={() => handleApprove(record.id, true)}
          onCancel={() => handleApprove(record.id, false)}
          okText={<span style={{ color: "black" }}>Yes</span>}
          cancelText="No"
        >
          <Button type="primary" danger size="small">
            Approve
          </Button>
        </Popconfirm>
      ),
    },
  ];

  return (
    <AdminLayout>
      <div>
        <h1>Approve Scholarships</h1>
        <Table dataSource={scholarshipData} columns={columns} />
      </div>
    </AdminLayout>
  );
};

export default ApproveScholarshipPage;
