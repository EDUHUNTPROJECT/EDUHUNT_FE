// Message.jsx
"use client";
import React, { useState } from "react";
import useChat from "../../../hooks/useChat";
import MainLayout from "../../../components/core/layouts/MainLayout";
import withAuth from "../../../HOC/withAuth";
import { Image as ImageAntd } from "antd";
import { VideoCameraFilled } from "@ant-design/icons";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
import { USER_DEMO } from "../../../components/constants/users";
import Sider from "../../../components/modules/messages/Sider";
const Message = () => {
  const { messages, sendMessage } = useChat();
  const [newMessage, setNewMessage] = useState("");
  const { id } = useParams();
  const information = USER_DEMO[+id];

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      sendMessage({
        sender: localStorage.getItem("userId"),
        content: newMessage,
        receiver: "8881d567-76bc-4163-903d-864f7ed0fd61",
      });
      setNewMessage("");
    }
  };

  return (
    <MainLayout>
      <div className="bg-white flex-1 border-[1px]">
        <div className="flex flex-row justify-between border-b-[1px] h-[65px] items-center px-4">
          <div className="flex flex-row items-center">
            <ImageAntd
              src={information?.avatar}
              alt=""
              width={40}
              height={40}
              className="rounded-full"
            ></ImageAntd>
            <div className="flex flex-col text-lg font-medium ml-2">
              <p>{information?.name}</p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Link href={`/message/${id}/meet`} passHref>
              <VideoCameraFilled />
            </Link>
          </div>
        </div>
        <div className="flex flex-1 h-[524px] overflow-auto">
          <Sider users={USER_DEMO}></Sider>
          <div className="flex flex-col justify-end p-4">
            <div className="pb-4">
              {messages.map((message, index) => (
                <div key={index}>{`${message.sender}: ${message.content}`}</div>
              ))}
            </div>
            <div className="flex w-[74vw]">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow mr-3 p-2 rounded border shadow-sm"
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Message;
