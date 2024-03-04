"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MainLayout from "../../../components/core/layouts/MainLayout";
import { useParams } from "next/navigation";

const ScholarshipDetail = () => {
  const [scholarship, setScholarship] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://localhost:7292/api/ScholarshipInfoes/${id}`
          );
          setScholarship(response.data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }
  }, [id]);

  if (!scholarship) {
    return <div>Loading...</div>;
  }

  return (
    <MainLayout>
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold">{scholarship.title}</h2>
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
