
"use client";
import MainLayout from "../../components/core/layouts/MainLayout";
import EditProfile from "../../components/Profile/EditProfile";
import ProfileLayout from "../../components/core/layouts/ProfileLayout";

const Profile = () => {
    return (
        <MainLayout>
            <ProfileLayout>
            
            <EditProfile />

            </ProfileLayout>
        </MainLayout>
    )
    ;
};



export default Profile;