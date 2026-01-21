import { useState } from "react";
import Button from "./button";
import NavBarItem from "./nav-item";
import CustomModal from "./custom-modal";

function NavBarComponent() {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [logoutValue, setLogoutValue] = useState(false);
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [modalIcon, setModalIcon] = useState("");

  const handleAddClick = () => {
    setShowCustomModal(true);
    setModalTitle("Add new food");
    setModalContent("here goes the form to add new food...");
    setModalIcon("fa-solid fa-utensils");
  };
  const handleCartClick = () => {
    setShowCustomModal(true);
    setModalTitle("This is your cart");
    setModalContent("here goes the form to show you what's in your cart...");
    setModalIcon("fa-solid fa-cart-shopping");
  };

  const receiveModalState = (value) => {
    setShowCustomModal(value);
  };

  return (
    <div className="flex items-center gap-4 rounded-lg bg-blue-200 p-6 shadow-md outline outline-black/5">
      <NavBarItem
        styles="w-100 px-4 py-2 border bg-white rounded-lg focus:ring-2 focus:ring-black focus:border-black"
        placeholder="Search..."
        type="input"
        value={searchInputValue}
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
          onClick={handleAddClick}
        />
        {showCustomModal && (
          <CustomModal
            isOpen={true}
            onModalStateChange={receiveModalState}
            title={modalTitle}
            textContent={modalContent}
            icon={modalIcon}
          />
        )}
        <Button
          styles="bg-blue-600 text-white px-5 py-3 rounded-lg text-base hover:bg-blue-800"
          text="Cart"
          icon="fa-solid fa-cart-shopping"
          onClick={handleCartClick}
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
