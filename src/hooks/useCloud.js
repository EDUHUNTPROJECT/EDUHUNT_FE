import { useEffect, useState } from 'react';
import { CldImage } from 'next-cloudinary';

// This hook simplifies using Cloudinary images in a Next.js app
const useCloud = (publicId) => {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME= ""
  const [src, setSrc] = useState('');

  useEffect(() => {
    // Here, you could add more logic to dynamically handle Cloudinary URLs,
    // apply transformations, or even lazy load images.
    if (publicId) {
      // Construct the URL or use Cloudinary SDK features
      const cloudName = NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
      const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload`;
      setSrc(`${baseUrl}/${publicId}`);
    }
  }, [publicId]);

  // Return a CldImage component for easy use in the component tree
  // You might want to extend this to accept additional props for customizations
  return {
    CloudinaryImage: (props) => <CldImage src={src} {...props} />,
  };
};

export default useCloud;
