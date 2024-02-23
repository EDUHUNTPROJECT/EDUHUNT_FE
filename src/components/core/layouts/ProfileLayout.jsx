import { Menu } from "antd";
import Link from "next/link"; // Import Link from next/link

const ProfileLayout = ({ children }) => {
  return (
    <>
      <div className="fixed left-8.5 z-5">
        <Menu mode="vertical">
          <Menu.Item key="1">
            <Link href="/profile">PROFILE</Link>
          </Menu.Item>
          <Menu.Item key="2">
            {/* Directly use Link without wrapping with <a> */}
            <Link href="/profile/changepassword">CHANGE PASSWORD</Link>
          </Menu.Item>

          <Menu.Item key="3">
            <Link href="/profile/uploadcv">UPLOAD CV</Link>
          </Menu.Item>
        </Menu>
      </div>
      <div>{children}</div>
    </>
  );
};

export default ProfileLayout;
