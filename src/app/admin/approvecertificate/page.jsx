"use client";
import React, { useState, useEffect } from "react";
import { Button, Table, Popconfirm, message } from "antd";
import { useCertificate } from "../../../hooks/useCertificate";
import AdminLayout from "../../../components/core/layouts/AdminLayout";
import { useRouter } from "next/navigation";

const ApproveCertificatePage = () => {
  const { getCertificate, approveCertificate } = useCertificate();
  const [certificateData, setCertificateData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "Admin") {
      router.push("/");
    }
    const fetchData = async () => {
      try {
        const data = await getCertificate();
        const unapprovedCertificates = data.filter(
          (certificate) => !certificate.isApproved
        );
        setCertificateData(unapprovedCertificates);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleApprove = async (id, isApproved) => {
    try {
      await approveCertificate(id, isApproved);
      setCertificateData(certificateData.filter((item) => item.id !== id));
      message.success("Certificate approved successfully");
    } catch (error) {
      console.error(error);
      message.error("Failed to approve certificate");
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
          alt="Certificate"
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
          title="Do you want to approve this certificate?"
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
        <h1>Approve Certificates</h1>
        <Table dataSource={certificateData} columns={columns} />
      </div>
    </AdminLayout>
  );
};

export default ApproveCertificatePage;