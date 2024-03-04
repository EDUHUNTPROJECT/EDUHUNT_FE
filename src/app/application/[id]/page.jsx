'use client'
import DetailApplication from "../../../components/Application/DetailApplication";
import MainLayout from "../../../components/core/layouts/MainLayout";
import { useParams } from "next/navigation";

 const ApplicationDetail=()=>{
    const { id } = useParams();
    console.log(id)
    return (
        <>
        <MainLayout>

        <DetailApplication id={id}/>
        
        </MainLayout>
        </>

    )
}

export default ApplicationDetail;