// useChat.js

import { useEffect, useState } from 'react';
import * as signalR from '@microsoft/signalr';

const useChat = () => {
  const [connection, setConnection] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7292/chatHub') // Adjust the URL based on your SignalR hub
      .build();

    setConnection(newConnection);

    newConnection
      .start()
      .then(() => {
        console.log('Connected to the hub!');
      })
      .catch(err => {
        console.error(err.toString());
      });

    newConnection.on('ReceiveMessage', message => {
      setMessages(prevMessages => [...prevMessages, message]);
    });

    return () => {
      if (newConnection) {
        newConnection.off('ReceiveMessage');
        newConnection.stop();
      }
    };
  }, []);

  const sendMessage = (message) => {

    console.log(message);

    if (connection) {
      connection
        .invoke('SendMessage', message)
        .catch(err => {
          console.error(err.toString());
        });
    } else {
      console.error('SignalR connection is not established.');
    }
  };

  return { messages, sendMessage };
};

export default useChat;
