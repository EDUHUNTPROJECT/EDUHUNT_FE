import axios from "axios";

const API_URL = "https://localhost:7292/api/RoadMaps";

export const useRoadMap = () => {
  const getRoadMap = async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  const deleteRoadMap = async (id) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  const postRoadMap = async () => {
    try {
      const response = await axios.post(API_URL);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  return {
    getRoadMap,
    deleteRoadMap,
    postRoadMap,
  };
};
