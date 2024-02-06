// src/MemberDetails.tsx
import React from 'react';

interface CandidateInfosProps {
    name: string;
    role: string;
}

const CandidateInfo: React.FC<CandidateInfosProps> = ({ name, role }) => {
    return (
        <div>
            <h2 >{name}</h2>
            <p>{role}</p>
        </div>
    );
};

export default CandidateInfo;
