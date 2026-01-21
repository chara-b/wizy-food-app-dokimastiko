import Food from "./food.jsx";
import { useState } from "react";

function FoodList(props) {
  const [foods, setFoods] = useState(props.data || []);

  const foodsNum = foods.length;
  return (
    foodsNum && (
      <ul className="w-full">
        {foods.map((food) => {
          <Food foodData={food} key={food.id} />;
        })}
      </ul>
    )
  );
}

export default FoodList;
