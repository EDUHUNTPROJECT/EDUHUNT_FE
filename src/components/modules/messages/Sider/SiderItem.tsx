"use client";

import { contactPreviewInterface } from "../../../models/user";
import { Badge, Image } from "antd";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

interface Props {
  information: contactPreviewInterface;
}

function SiderItem({ information }: Props) {
  const { id } = useParams();

  console.log(id);
  console.log(information?.id);

  return (
    <div
      className={
        "flex flex-row w-full gap-4 items-center p-4 bg-white hover:bg-blue-50 transition-all"
      }
      style={{
        background: id == information?.id ? "#edf3f7" : "",
      }}
    >
      <Badge size="small" dot={true} color="blue">
        <Image
          src={information?.avatar}
          alt=""
          width={40}
          height={40}
          className="rounded-full"
        ></Image>
      </Badge>
      <Link
        href={`/lien-he/${information?.id}`}
        className="flex text-stone-700 hover:text-black transition-all"
      >
        <div className="flex flex-col">
          <p className="text-lg text-medium">{information?.name}</p>
          <p className=" text-stone-600 truncate max-w-52">
            You: {information?.lastMessage}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default SiderItem;
