import Food from "./food.jsx";
import { useEffect, useState } from "react";

function FoodList({ data, searchText }) {
  const [foods, setFoods] = useState(data || []);
  const [filteredFoods, setFilteredFoods] = useState([]);

  useEffect(() => {
    if (!searchText.trim()) {
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

  return (
    foodsNum && (
      <ul className="grid grid-cols-3 gap-4 mt-5 ml-5 mr-5">
        {filteredFoods.map((food) => {
          return <Food foodData={food} key={food.id} />;
        })}
      </ul>
    )
  );
}

export default FoodList;
