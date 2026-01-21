import { useState } from "react";
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
  return (
    <div className="flex flex-col w-full">
      <NavBarComponent className="w-full" />
      <FoodList className="w-full" data={data} />
      <Footer className="w-full" />
    </div>
  );
}

export default App;
