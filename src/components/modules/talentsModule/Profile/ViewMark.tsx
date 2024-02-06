import { Button, Modal } from "antd";
import React, { useState } from "react";

const imageUrl =
  "https://images2.thanhnien.vn/Uploaded/quochung-qc/2022_06_23/fpt-1-3802.png";

function ViewMark() {
  const [modalVisible, setModalVisible] = useState(false);

  // ... (your existing code)

  // Function to handle button click and show modal
  const handleButtonClick = () => {
    setModalVisible(true);
  };

  // Function to handle modal close
  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={handleButtonClick}
        className="text-[black]"
      >
        Open Image
      </Button>

      {/* Modal to display the image */}
      <Modal
        title="Image Preview"
        visible={modalVisible}
        onCancel={handleModalClose}
        footer={null}
        width={1000} // Adjust the width as needed
      >
        <img src={imageUrl} alt="Preview" className="w-full" />
      </Modal>
    </>
  );
}

export default ViewMark;
