import { useState, useEffect } from "react";
import "./App.css";

import pizza from "./assets/pizza.png";
import burger from "./assets/burger.png";
import cocacola from "./assets/cocacola.png";
import juice from "./assets/juice.png";
import koulouri from "./assets/koulouri.png";
import mpougatsa from "./assets/mpougatsa.png";
import salad from "./assets/salad.png";
import sandwich from "./assets/sandwich.png";
import toast from "./assets/toast.png";
import water from "./assets/water.png";

import { data } from "./data.js";
import NavBarComponent from "./components/nav-bar";
import FoodList from "./components/food-list";
import Footer from "./components/footer";

function App() {
  const [searchText, setSearchText] = useState("");
  const [deletedFoods, setDeletedFoods] = useState([]);

  const search = (text) => {
    setSearchText(text);
  };

  const handleDeletedFoodsList = (deletedFoodsList) => {
    setDeletedFoods(deletedFoodsList);
  };

  return (
    <div className="flex flex-col w-full h-screen">
      <NavBarComponent
        className="w-full"
        receiveSearchText={search}
        deletedFoods={() => deletedFoods}
      />
      <FoodList
        className="w-full"
        data={data}
        searchText={searchText}
        receiveDeletedFoodsList={handleDeletedFoodsList}
        icon="fa-solid fa-trash"
        btnType="delete"
        colsCount="3"
      />
      <Footer className="w-full" />
    </div>
  );
}

export default App;
