"use client";
import { useEffect } from "react";
import ListApplication from "../../components/Application/ListApplication";
import MainLayout from "../../components/core/layouts/MainLayout";
import { useRouter } from "next/navigation";

const Application = () => {
  const router = useRouter();
  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "User") {
      router.push("/");
    }
  });
  return (
    <>
      <MainLayout>
        <ListApplication></ListApplication>
      </MainLayout>
    </>
  );
};

export default Application;
