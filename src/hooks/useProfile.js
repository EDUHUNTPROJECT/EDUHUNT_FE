import axios from "axios";

const API_URL = "https://localhost:7292/api/Profiles"; // Adjust the API URL as needed

export const useProfile = () => {
  const getProfile = async (userId) => {
    try {
      console.log("===============", userId);
      const response = await axios.get(`${API_URL}/${userId}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const getallprofile = async () => {
    try {
      const response = await axios.get(`${API_URL}`);
      return response.data;
    }
    catch (error) {
      throw error;
    }
  }

  const updateProfile = async (id, profileData) => {
    try {
      console.log(profileData);
      const response = await axios.put(`${API_URL}/${id}`, profileData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const changePassword = async (currentPassword, newPassword) => {
    try {
      const userId = localStorage.getItem("userId");
      console.log(userId);
      console.log("===============", currentPassword);
      console.log("===============", newPassword);

      if (!userId) {
        throw new Error("User ID not found in localStorage");
      }

      const passwordData = {
        userId,
        currentPassword,
        newPassword,
      };

      const response = await axios.post(
        `https://localhost:7292/api/Account/changePassword`,
        passwordData
      );

      console.log(response);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return {
    getProfile,
    updateProfile,
    changePassword,
    getallprofile,
  };
};
