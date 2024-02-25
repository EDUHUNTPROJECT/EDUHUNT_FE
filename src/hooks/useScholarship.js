import axios from "axios";

const API_URL = "https://localhost:7292/api/ScholarshipInfoes";

export const useScholarship = () => {
  const getScholarship = async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  const  deleteScholarship = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  return {
    getScholarship, deleteScholarship
  };
};
