import axios from 'axios';

const API_URL = 'https://localhost:7292/api/Profiles'; // Adjust the API URL as needed

export const useProfile = () => {
  const getProfile = async (userId) => {
    try {
      console.log("===============",userId);
      const response = await axios.get(`${API_URL}/${userId}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const updateProfile = async (id, profileData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, profileData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return {
    getProfile,
    updateProfile,
  };
};
