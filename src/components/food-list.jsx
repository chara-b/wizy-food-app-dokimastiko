import Food from "./food.jsx";
import { useEffect, useState } from "react";

function FoodList({
  data,
  searchText,
  receiveDeletedFoodsList,
  icon,
  btnType,
  colsCount,
}) {
  const [foods, setFoods] = useState(data || []);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [deletedFoods, setDeletedFoods] = useState([]);

  const handleDeletedFood = (deletedFood) => {
    console.log("deletedFood: ", deletedFood);
    const results = filteredFoods.filter((food) => food.id !== deletedFood.id);
    setFilteredFoods(results);
    setDeletedFoods((prevDeletedFoods) => [...prevDeletedFoods, deletedFood]);
    receiveDeletedFoodsList(() => deletedFoods);
    console.log(deletedFoods);
  };

  const handleRestoredFood = (restoredFood) => {
    console.log("restoredFood: ", restoredFood);
    setFilteredFoods((prevFilteredFoods) => [
      ...prevFilteredFoods,
      restoredFood,
    ]);
  };

  useEffect(() => {
    if (!searchText?.trim()) {
      setFilteredFoods(foods);
      return;
    }

    const lowCaseSearchText = searchText.toLowerCase();
    const results = foods.filter((food) =>
      food.title.toLowerCase().includes(lowCaseSearchText),
    );
    setFilteredFoods(results);
  }, [searchText]);

  const foodsNum = filteredFoods.length;

  return foodsNum ? (
    <ul className={`grid grid-cols-${colsCount} gap-4 mt-5 ml-5 mr-5`}>
      {filteredFoods.map((food) => {
        return (
          <Food
            foodData={food}
            key={food.id}
            receiveDeletedFood={handleDeletedFood}
            receiveRestoredFood={handleRestoredFood}
            btnIcon={icon}
            btnType={btnType}
          />
        );
      })}
    </ul>
  ) : (
    "No foods found !"
  );
}

export default FoodList;
