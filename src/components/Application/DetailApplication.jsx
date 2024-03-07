"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, Typography, Button, Spin, Descriptions } from "antd";
import { useApplication } from "../../hooks/useApplication"; // Giả sử bạn có hook này để lấy chi tiết ứng dụng
import { useScholarship } from "../../hooks/useScholarship";
const { Title, Text } = Typography;

export default function DetailApplication({ id }) {
  console.log(id);
  const router = useRouter();
  const { getApplication } = useApplication();
  const { getDetailScholarShip } = useScholarship();
  const [application, setApplication] = useState(null);
  const [scholarship, setScholarship] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchApplicationDetail = async () => {
        setLoading(true);
        try {
          const appDetail = await getApplication(id);
          setApplication(appDetail);
          if (appDetail && appDetail.scholarshipID) {
            const schDetail = await getDetailScholarShip(
              appDetail.scholarshipID
            );
            setScholarship(schDetail);
          }
        } catch (error) {
          console.error("Error fetching details:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchApplicationDetail();
    }
  }, [id]);

  if (loading) {
    return <Spin size="large" />;
  }

  if (!application || !scholarship) {
    return <Text>Details not found</Text>;
  }

  // Format budget here as needed
  const formatBudget = (budget) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(budget);
  };

  return (
    <div style={{ padding: "20px" }}>
      <Card bordered={false}>
        <Title level={2}>{scholarship.title || "Title Not Available"}</Title>
        <Descriptions layout="vertical" bordered>
          <Descriptions.Item label="Budget">
            {scholarship.budget ? formatBudget(scholarship.budget) : "N/A"}
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            {application.status}
          </Descriptions.Item>
          <Descriptions.Item label="Location">
            {scholarship.location || "N/A"}
          </Descriptions.Item>
          <Descriptions.Item label="Application Reason">
            {application.applicationReason || "No reason provided"}
          </Descriptions.Item>
        </Descriptions>
        <Button type="primary" href={scholarship.url || "#"} target="_blank">
          Visit Scholarship Website
        </Button>
      </Card>
    </div>
  );
}
