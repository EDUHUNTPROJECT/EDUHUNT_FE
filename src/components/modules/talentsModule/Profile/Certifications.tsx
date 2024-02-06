import { Avatar, Button, Card, Col, List } from "antd";
import Paragraph from "antd/es/skeleton/Paragraph";
import Title from "antd/es/skeleton/Title";
import React, { useState } from "react";

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

function Certifications() {
  return (
    // <div className="bg-white p-4 rounded-lg  basis-[70%] w-full" >
    //   <h1 className="text-3xl font-w-1 text-blue-700">Chứng nhận</h1>

    //   {" "}
    //   <List
    //     itemLayout="horizontal"
    //     dataSource={data}
    //     renderItem={(item, index) => (
    //       <List.Item>
    //         <List.Item.Meta
    //           avatar={
    //             <Avatar
    //               src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
    //             />
    //           }
    //           title={<a href="https://ant.design">{item.title}</a>}
    //           description="Ant Design, a design language for background applications, is refined by Ant UED Team"
    //         />
    //       </List.Item>
    //     )}
    //   />
    // </div>
    <div className=" rounded-lg  basis-[70%] w-ful ">
      <div className="relative h-full">
        <span className="absolute w-full h-full mt-1 ml-1 bg-blue-400 rounded-lg"></span>
        <div className="relative h-full p-5 bg-white border-2 border-blue-400 rounded-lg">
          <div className="flex items-center -mt-1">
            <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
              Project Audit
            </h3>
          </div>
          <p className="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">
            ------------
          </p>

          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                    />
                  }
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </List.Item>
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default Certifications;
