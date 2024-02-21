import { useState } from "react";
import { useProfile } from "../../hooks/useProfile";

const ChangePassword = () => {
  const { changePassword } = useProfile();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await changePassword(currentPassword, newPassword);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ width: 500, height: 500, backgroundColor: "red" }}>
      <h1>Change Password</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Current Password:
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </label>
        <label>
          New Password:
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ChangePassword;
