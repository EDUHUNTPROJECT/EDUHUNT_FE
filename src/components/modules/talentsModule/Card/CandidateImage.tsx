import Image from 'next/image';
import React from 'react';

interface MemberImageProps {
    imageUrl: string;
    altText: string;
}

const CandidateImage: React.FC<MemberImageProps> = ({ imageUrl, altText }) => {
    return (
    //     <Image
    //     src={imageUrl} 
    //     alt="Your image description"
    //     width={1000}  // Set the width of the image
    //     height={300}  // Set the height of the image
    //     objectFit="cover"
    //   />
        <img
            src={imageUrl} 
            alt={altText} 
            style={{ width: '100%', height: '300px', objectFit: 'cover' }}
        />
    );
};

export default CandidateImage;
