import { useState, useEffect } from "react";
import Button from "./button";
import NavBarItem from "./nav-item";
import CustomModal from "./custom-modal";

function NavBarComponent({ receiveSearchText, deletedFoods }) {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [logoutValue, setLogoutValue] = useState(false);
  const [showCustomModal, setShowCustomModal] = useState(false);
  const [btnNameClicked, setBtnNameClicked] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");
  const [modalList, setModalList] = useState([]);
  const [modalIcon, setModalIcon] = useState("");
  const [modalActionBtnLeft, setModalActionBtnLeft] = useState("");
  const [modalActionBtnRight, setModalActionBtnRight] = useState("");

  const handleChangedSearchText = (e) => {
    const searchText = e.target.value;
    setSearchInputValue(searchText);
    receiveSearchText(searchText);
    console.log(searchInputValue);
  };

  const handleLougout = (e) => {
    setLogoutValue((prevLogoutValue) => {
      console.log("logged out: " + true);
      return true;
    });
  };

  const handleAddClick = () => {
    setShowCustomModal(true);
    setBtnNameClicked("add");
    setModalTitle("Add new food");
    setModalContent("here goes the form to add new food...");
    setModalIcon("fa-solid fa-utensils");
    setModalActionBtnLeft("Cancel");
    setModalActionBtnRight("Add");
  };

  const handleDeletedFolderClick = () => {
    setShowCustomModal(true);
    setBtnNameClicked("deleted");
    setModalTitle("This is your deleted foods folder");
    setModalContent(
      "here goes the form to show you what's in your deleted foods folder...",
    );
    setModalIcon("fa-solid fa-trash");
    setModalActionBtnLeft("Cancel");
    setModalActionBtnRight("Restore All");
  };

  const receiveModalState = (value) => {
    setShowCustomModal(value);
  };

  useEffect(() => {
    setModalList(deletedFoods);
  }, [deletedFoods]);

  return (
    <div className="flex items-center gap-4 rounded-lg bg-blue-200 p-6 shadow-md outline outline-black/5">
      <NavBarItem
        styles="w-100 px-4 py-2 border bg-white rounded-lg focus:ring-2 focus:ring-black focus:border-black"
        placeholder="Search..."
        type="input"
        value={searchInputValue}
        icon="fa-solid fa-magnifying-glass"
        onChange={handleChangedSearchText}
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
            content={btnNameClicked === "deleted" ? modalList : modalContent}
            icon={modalIcon}
            actionBtnLeft={modalActionBtnLeft}
            actionBtnRight={modalActionBtnRight}
          />
        )}
        <Button
          styles="bg-blue-600 text-white px-5 py-3 rounded-lg text-base hover:bg-blue-800"
          text="Deleted"
          icon="fa-solid fa-trash"
          onClick={handleDeletedFolderClick}
        />
        <Button
          styles="bg-blue-600 text-white px-5 py-3 rounded-lg text-base hover:bg-blue-800"
          text="Logout"
          icon="fa-solid fa-right-from-bracket"
          onClick={handleLougout}
        />
      </div>
    </div>
  );
}
export default NavBarComponent;
