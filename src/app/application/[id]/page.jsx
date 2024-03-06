"use client";
import DetailApplication from "../../../components/Application/DetailApplication";
import MainLayout from "../../../components/core/layouts/MainLayout";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

const ApplicationDetail = () => {
  const router = useRouter();
  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "User") {
      router.push("/");
    }
  });
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <MainLayout>
        <DetailApplication id={id} />
      </MainLayout>
    </>
  );
};

export default ApplicationDetail;
