"use client";
import React, { useState, useEffect } from "react";
import { Button, Table, Popconfirm, message } from "antd";
import { useRoadMap } from "../../../hooks/useRoadMap";
import AdminLayout from "../../../components/core/layouts/AdminLayout";
import { useRouter } from "next/navigation";

const ApproveRoadMapPage = () => {
  const { getRoadMap, approveRoadMap } = useRoadMap();
  const [roadMapData, setRoadMapData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "Admin") {
      router.push("/");
    }
    const fetchData = async () => {
      try {
        const data = await getRoadMap();
        const unapprovedRoadMaps = data.filter(
          (roadMap) => !roadMap.isApproved
        );
        setRoadMapData(unapprovedRoadMaps);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleApprove = async (id, isApproved) => {
    try {
      await approveRoadMap(id, isApproved);
      setRoadMapData(roadMapData.filter((item) => item.id !== id));
      message.success("Roadmap approved successfully");
    } catch (error) {
      console.error(error);
      message.error("Failed to approve roadmap");
    }
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "contentURL",
      key: "contentURL",
      render: (text, record) => (
        <img
          src={record.contentURL}
          alt="Roadmap"
          style={{ width: "50px", height: "50px" }}
        />
      ),
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text, record) => new Date(record.createdAt).toLocaleDateString(),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Popconfirm
          title="Do you want to approve this roadmap?"
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
        <h1>Approve Roadmaps</h1>
        <Table dataSource={roadMapData} columns={columns} />
      </div>
    </AdminLayout>
  );
};

export default ApproveRoadMapPage;
