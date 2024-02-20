'use client'
import React, { useEffect, useState } from 'react';
import useAdmin from '../../hooks/useAdmin'

export default function AdminTestPage() {
  const { getUserList, deleteUser } = useAdmin();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const userListData = await getUserList();
        console.log(userListData)
        setUserList(userListData);
      } catch (error) {
        console.error("Error fetching user list:", error);
      }
    };

    fetchUserList();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      await deleteUser(userId);
      // Refresh user list after deletion
      const updatedUserList = await getUserList();
      setUserList(updatedUserList);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {userList.map((user) => (
          <li key={user.id}>
            <span>{user.name}</span>
            <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

