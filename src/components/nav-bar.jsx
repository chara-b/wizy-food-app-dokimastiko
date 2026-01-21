import { useState } from "react";
import Button from "./button";
import NavBarItem from "./nav-item";
import CustomModal from "./custom-modal";

function NavBarComponent() {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [logoutValue, setLogoutValue] = useState(false);
  const [showCustomModal, setShowCustomModal] = useState(false);

  const handleClick = () => {
    setShowCustomModal(true);
  };

  const receiveModalState = (value) => {
    setShowCustomModal(value);
  };

  return (
    <div className="flex items-center gap-4 rounded-lg bg-white p-6 shadow-md outline outline-black/5">
      <NavBarItem
        styles="w-100 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black focus:border-black"
        placeholder="Search..."
        type="input"
        icon="fa-solid fa-magnifying-glass"
        onChange={(e) => {
          setSearchInputValue(e.target.value);
          console.log(searchInputValue);
        }}
      />

      <div className="flex ml-auto gap-4">
        <Button
          styles="bg-blue-600 text-white px-5 py-3 rounded-lg text-base hover:bg-blue-800"
          text="Add"
          icon="fa-solid fa-circle-plus"
          onClick={handleClick}
        />
        {showCustomModal && (
          <CustomModal isOpen={true} onModalStateChange={receiveModalState} />
        )}
        <Button
          styles="bg-blue-600 text-white px-5 py-3 rounded-lg text-base hover:bg-blue-800"
          text="Cart"
          icon="fa-solid fa-cart-shopping"
        />
        <Button
          styles="bg-blue-600 text-white px-5 py-3 rounded-lg text-base hover:bg-blue-800"
          text="Logout"
          icon="fa-solid fa-right-from-bracket"
          onClick={(e) => {
            setLogoutValue((prevLogoutValue) => {
              console.log("logged out: " + true);
              return true;
            });
          }}
        />
      </div>
    </div>
  );
}
export default NavBarComponent;
