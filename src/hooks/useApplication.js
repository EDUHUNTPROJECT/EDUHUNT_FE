import axios from "axios";

const API_URL = "https://localhost:7292/api/Applications";

export const useApplication = () => {
  const getApplications = async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const getApplication = async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const postApplication = async (application) => {
    try {
      const response = await axios.post(API_URL, application);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const putApplication = async (id, application) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, application);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const deleteApplication = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return {
    getApplications,
    getApplication,
    postApplication,
    putApplication,
    deleteApplication,
  };
};