"use client";
import MainLayout from "../../../components/core/layouts/MainLayout";
import ChangePassword from "../../../components/Profile/ChangePassword";
import ProfileLayout from "../../../components/core/layouts/ProfileLayout";

const ChangePasswordPage = () => {
  return (
    <MainLayout>
      <ProfileLayout>
        <ChangePassword />
      </ProfileLayout>
    </MainLayout>
  );
};

export default ChangePasswordPage;
