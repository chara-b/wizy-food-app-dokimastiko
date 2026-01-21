import Food from "./food.jsx";
import { useState } from "react";

function FoodList(props) {
  const [foods, setFoods] = useState(props.data || []);

  const foodsNum = foods.length;
  return (
    foodsNum && (
      <ul className="grid grid-cols-3 gap-4 mt-5 ml-5 mr-5">
        {foods.map((food) => {
          return <Food foodData={food} key={food.id} />;
        })}
      </ul>
    )
  );
}

export default FoodList;
