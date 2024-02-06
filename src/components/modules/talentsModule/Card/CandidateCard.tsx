import {Card} from "antd";
import Meta from "antd/es/card/Meta";
import Link from "next/link";
import CandidateImage from "./CandidateImage";

interface CandidateCardProps {
    candidateId: number;
    name: string;
    role: string;
    imageUrl: string;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ candidateId, name, role, imageUrl }) => {
    return (
        <Link href={`/thong-tin-ung-vien/${candidateId}`}>
            <div className="group">
                <Card
                    style={{width: 300, margin: 16}}
                    cover={<CandidateImage imageUrl={imageUrl} altText={`${name}'s avatar`}/>}
                    className="group-hover:shadow-lg transition-transform transform duration-300 ease-in-out"
                >
                    <Meta title={name} description={role}/>
                </Card>
            </div>
        </Link>

    );
};


export default CandidateCard