
import { useProfile } from "@/hooks/useProfile";
import { useEffect, useState } from "react";

function EditProfile() {
  const userId = localStorage.getItem("userId");
  const { getProfile, updateProfile } = useProfile();
  const [profile, setProfile] = useState({
    id: '',
    
    firstName: '', // Change these field names to match your API response
    lastName: '',
    userName: '',
    contactNumber: '',
    address: '',
    description: '',
  });

  useEffect(() => {
    // Fetch the user's profile when the component mounts
    getProfile(userId)
      .then((data) => {
        
        // Update the field names here to match your API response
        setProfile({
          id: data.id,
      
          firstName: data.firstName || '',
          lastName: data.lastName || '',
          userName: data.userName || '',
          contactNumber: data.contactNumber || '',
          address: data.address || '',
          description: data.description || '',
        });
      })
      .catch((error) => console.error('Error fetching profile:', error));
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleUpdateProfile = () => {
    console.log(profile);
    updateProfile(profile.id, profile)
      .then(() => {
        console.log('Profile updated successfully');
        // You can navigate to another page or show a success message here
      })
      .catch((error) => console.error('Error updating profile:', error));
  };

  return (
    <div>
      <h1>Edit Profile</h1>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          value={profile.firstName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={profile.lastName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="userName">Username:</label>
        <input
          type="text"
          name="userName"
          value={profile.userName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="contactNumber">Contact Number:</label>
        <input
          type="text"
          name="contactNumber"
          value={profile.contactNumber}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          name="address"
          value={profile.address}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          value={profile.description}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={handleUpdateProfile}>Save Profile</button>
    </div>
  );
}

export default EditProfile;
