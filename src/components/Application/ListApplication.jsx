'use client'
import { useApplication } from "../../hooks/useApplication"; // Corrected the path
import { useScholarship } from "../../hooks/useScholarship"; // Assuming you have a similar path for this hook
import { useEffect, useState } from "react";

export default function Application() {
    const { getApplications } = useApplication();
    const { getScholarship } = useScholarship();
    const [userApplications, setUserApplications] = useState([]);

    useEffect(() => {
        const fetchApplicationsAndScholarships = async () => {
            try {
                const studentID = localStorage.getItem("userId"); // Assuming userID is stored with this key
                const applications = await getApplications();
                const scholarships = await getScholarship();
               
                // Filter applications for the current user
                const filteredApplications = applications.filter(app => app.studentID === studentID);
                
                // Merge application with scholarship detai`ls
                const mergedData = filteredApplications.map(app => {
                    // Log the IDs to be compared to ensure they are what you expect
                
                    const scholarshipDetails = scholarships.find(sch => sch.id.toString() === app.scholarshipID.toString());
                    return { ...app, scholarshipDetails };
                });
                

                setUserApplications(mergedData);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };

        fetchApplicationsAndScholarships();
    }, []); // Empty dependency array means this effect runs once on mount
    console.log("userApplications", userApplications);
    return (
        <div>
            <h1>Application</h1>
        </div>
    );
}
