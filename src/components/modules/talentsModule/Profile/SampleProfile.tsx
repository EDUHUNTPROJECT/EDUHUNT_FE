import { UserAddOutlined } from "@ant-design/icons";
import { Avatar, Button, Card } from "antd";
import React from "react";

function SampleProfile() {
  return (
    <div className="bg-slate-100 border border-[black] rounded-lg">
      <Card title="Ứng viên tương tự" bordered={false} style={{ width: 380 }}>
        <div className=" flex w-full">
          <Avatar
            size={64}
            src="https://th.bing.com/th/id/OIP.9F-3w9sVCDc05rZ1Z2bMTgHaJQ?w=202&h=253&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            className="mx-auto mb-3"
          />
          <div className="ml-1">
            <h2 className="text-lg font-semibold">Nguyễn Đức</h2>
            <div className="text-gray-500 flex gap-3">
              <p>Kon Tum</p> | <p>Trường THPT Kon Tum</p>
            </div>
          </div>
        </div>

        <div className="p-4">
          <Button
            type="primary"
            shape="round"
            icon={<UserAddOutlined />}
            className="w-50 text-[black]"
          >
            Connect
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default SampleProfile;
