import React,{useState} from "react";
import LoginButton from "./modal/LoginBtn";
import LoginModal from "./modal/LoginModal";


function OnClickLogin() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  
  return (
    <div>
      <LoginButton onClick={handleModalOpen} />
      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default OnClickLogin;