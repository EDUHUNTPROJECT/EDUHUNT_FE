'user client'
import { useEffect, useState } from "react";
import { useApplication } from "../../hooks/useApplication";
import Link from 'next/link';

export default function ListApplicationScholarshipProvider() {
    const { getApplicationsByScholarshipProvider } = useApplication();
    const [providerApplications, setProviderApplications] = useState([]);

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const providerId = localStorage.getItem("userId"); // Assuming provider ID is stored with this key
                if (!providerId) {
                    console.error("Provider ID not found");
                    return;
                }
                
                const applications = await getApplicationsByScholarshipProvider(providerId);
                setProviderApplications(applications);
            } catch (error) {
                console.error("Failed to fetch applications:", error);
            }
        };

        fetchApplications();
    }, []);
    console.log(providerApplications);
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-6">Applications to My Scholarships</h1>
            {providerApplications.length > 0 ? (
                <ul>
                    {providerApplications.map((application, index) => (
                        <li key={index} className="bg-white shadow rounded-lg p-6 mb-4">
                            <Link href={`/application/${application.applicationId}`} passHref>
                                <div className="cursor-pointer">
                                    <h2 className="text-xl font-semibold">{application.scholarshipTitle || "Scholarship Title Not Available"}</h2>
                                    <p className="text-md text-gray-600">Budget: {application.scholarshipBudget || "N/A"}</p>
                                    <p className="text-md text-gray-600">Location: {application.scholarshipLocation || "N/A"}</p>
                                    <p className="text-md text-gray-600">Status: {application.status || "Unknown"}</p>
                                    <a href={application.Url || "#"} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Scholarship Details</a>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-center text-gray-500">No applications found.</p>
            )}
        </div>
    );
}
