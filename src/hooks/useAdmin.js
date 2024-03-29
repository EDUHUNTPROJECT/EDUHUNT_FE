import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

const useAdmin = () => {
  const router = useRouter();

  const getUserList = async () => {
    try {
      const response = await axios.get(
        "https://localhost:7292/api/Account/listuser",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const userList = response.data;
      return userList;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await axios.delete(
        `https://localhost:7292/api/Account/deleteuser/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return { getUserList, deleteUser };
};

export default useAdmin;
