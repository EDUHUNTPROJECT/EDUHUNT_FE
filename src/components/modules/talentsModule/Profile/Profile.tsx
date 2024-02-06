"use client";
import { ContainerOutlined, UserAddOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import ViewMark from "./ViewMark";
interface ProfileProps {
  imageUrl: string; // Assuming imageUrl should be a string
  name: string;
}

function Profile({ imageUrl, name }: ProfileProps) {
  return (
    <div className="max-w-full basis-[70%] bg-white  rounded-lg ">
      <div className="rounded-t-lg h-32 overflow-hidden">
        <img
          className="object-cover object-top w-full"
          src="https://media.licdn.com/dms/image/D5616AQH47LSmDOepUA/profile-displaybackgroundimage-shrink_350_1400/0/1704899843851?e=1710979200&v=beta&t=Silyk01a1vvMoUxYSQOZe1YOMgUoFiG4UlszFqAf4sI"
          alt="Mountain"
        />
      </div>
      <div className="flex">
        <div className="ml-5 w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          <img
            className="object-cover object-center h-32"
            src={imageUrl}
            alt="Woman looking front"
          />
        </div>
        <div className="mt-3 ml-5 text-left">
          <h1 className="font-semibold  text-3xl">{name}</h1>
          <p className="mt-2 text-gray-500">Freelance Web Designer</p>
        </div>
      </div>

      <div className="p-4 flex gap-3">
        <Button
          type="primary"
          shape="round"
          icon={<UserAddOutlined />}
          className="w-50 text-[black]"
        >
          Connect
        </Button>
        <ViewMark></ViewMark>
      </div>
    </div>
  );
}

export default Profile;
