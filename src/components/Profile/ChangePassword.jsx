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
    <div className="w-[50%] m-auto p-10">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-12">
        <label className="flex flex-col text-sm font-medium text-gray-700">
          Current Password:
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md"
          />
        </label>
        <label className="flex flex-col text-sm font-medium text-gray-700">
          New Password:
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md"
          />
        </label>
        <input
          type="submit"
          value="Submit"
          className="bg-[#00277f] text-[white] self-center mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        />
      </form>
    </div>
  );
};

export default ChangePassword;
