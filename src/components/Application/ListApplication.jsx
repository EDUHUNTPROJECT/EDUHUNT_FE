"use client";
import { useEffect, useState } from "react";
import { useApplication } from "../../hooks/useApplication";
import { useScholarship } from "../../hooks/useScholarship";
import Link from 'next/link';

export default function ApplicationList() {
    const { getApplications } = useApplication();
    const { getScholarship } = useScholarship();
    const [userApplications, setUserApplications] = useState([]);

    useEffect(() => {
        const fetchApplicationsAndScholarships = async () => {
            try {
                const studentID = localStorage.getItem("userId"); // Assuming userID is stored with this key
                const applications = await getApplications();
                const scholarships = await getScholarship();

                // Filter applications for the current user and merge with scholarship details
                const mergedData = applications.filter(app => app.studentID === studentID)
                    .map(app => {
                        const scholarshipDetails = scholarships.find(sch => sch.id === app.scholarshipID);
                        return { ...app, scholarshipDetails: scholarshipDetails || {} };
                    });

                setUserApplications(mergedData);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };

        fetchApplicationsAndScholarships();
    }, []);

    // Helper function to format budget
    const formatBudget = (budget) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(budget);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-6">My Applications</h1>
            {userApplications.length > 0 ? (
                <ul>
                    {userApplications.map((application, index) => (
                          <Link key={index} href={`/application/${application.id}`} passHref>
                          <li className="bg-white shadow rounded-lg p-6 mb-4 cursor-pointer">
                            <h2 className="text-xl font-semibold">{application.scholarshipDetails.title || "Scholarship Title Not Available"}</h2>
                            <p className="text-md text-gray-600">Budget: {application.scholarshipDetails.budget ? formatBudget(application.scholarshipDetails.budget) : "N/A"}</p>
                            <p className="text-md text-gray-600">Location: {application.scholarshipDetails.location || "N/A"}</p>
                            <p className="text-md text-gray-600">Status: {application.status || "Unknown"}</p>
                            <a href={application.scholarshipDetails.url || "#"} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Scholarship Details</a>
                          </li>
                        </Link>
                    ))}
                </ul>
            ) : (
                <p className="text-center text-gray-500">No applications found.</p>
            )}
        </div>
    );
}
