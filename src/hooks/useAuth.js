import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const useAuth = () => {
  const router = useRouter();

  const registerUser = async ({ name, email, password, confirmPassword }) => {
    try {
      const response = await axios.post(
        'https://localhost:7292/api/Account/register',
        {
          name,
          email,
          password,
          confirmPassword,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = response.data;
      console.log(data);

      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const login = async ({ email, password, rememberMe }) => {
    console.log(email, password, rememberMe);
    try {
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      if (!email.match(emailRegex)) {
        throw new Error('Email not valid');
      }

      const response = await axios.post(
        'https://localhost:7292/api/Account/login',
        {
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );

      console.log(response);
      const data = response.data;
      
      if (rememberMe) {
        localStorage.setItem('email', email);
      }

      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('userEmail', email);
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.userId);

      router.push('/');
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('token');
    router.push('/login');
  };

  return { registerUser, login, logout };
};

export default useAuth;
