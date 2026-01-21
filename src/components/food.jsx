import Button from "./button";

function CardSection1({ data }) {
  return (
    <img src={"../src/assets/" + data.foodData.imgName} className="w-20 mr-2" />
  );
}

function CardSection2({ data }) {
  return (
    <div className="flex flex-col w-full">
      <h1 className="mb-5 text-xl">{data.foodData.title}</h1>
      <div className="mb-5">
        <span>
          <u>Ingredients:</u>
        </span>
        <ul>
          {data.foodData.ingredients.map((ingredient, i) => (
            <li key={i}>
              <i>{ingredient}</i>
            </li>
          ))}
        </ul>
      </div>
      <p className="font-bold">
        Price: {data.foodData.price + data.foodData.currency}
      </p>
      <span>Quantity: {data.foodData.quantity}</span>
    </div>
  );
}

function Food({ receiveDeletedFood, receiveRestoredFood, ...props }) {
  const handleDeleteFoodClick = (food) => {
    receiveDeletedFood(food);
  };

  const handleRestoreFoodClick = (food) => {
    receiveRestoredFood(food);
  };

  const handleFoodCardBtnClick = () => {
    if (props.btnType === "delete") {
      handleDeleteFoodClick(props.foodData);
    }
    if (props.btnType === "restore") {
      handleRestoreFoodClick(props.foodData);
    }
  };

  return (
    <li className="flex items-center gap-4 rounded-lg bg-blue-100 p-6 shadow-md outline outline-black/5">
      <CardSection1 data={props} />
      <CardSection2 data={props} />
      <Button
        icon={props.btnIcon}
        styles="px-3 py-1.5 text-sm font-medium rounded-md bg-blue-500 hover:bg-blue-600 text-white transition-colors"
        onClick={handleFoodCardBtnClick}
        disabled={props.disabledBtn}
      />
    </li>
  );
}
export default Food;
