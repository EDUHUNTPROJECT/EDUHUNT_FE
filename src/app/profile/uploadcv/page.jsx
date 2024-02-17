
"use client";
import MainLayout from "@/components/core/layouts/MainLayout";
import UploadCV from "@/components/Profile/UploadCV";
import ProfileLayout from "@/components/core/layouts/ProfileLayout";
const UploadCVPage = () => {
    return (
        <MainLayout>
            <ProfileLayout>

            <UploadCV />

            </ProfileLayout>
        </MainLayout>
    )
}

export default UploadCVPage