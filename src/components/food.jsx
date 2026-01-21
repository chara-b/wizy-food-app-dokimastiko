import Button from "./button";

function Food(props) {
  console.log("../assets/" + props.foodData.imgName);
  return (
    <li className="flex items-center gap-4 rounded-lg bg-blue-100 p-6 shadow-md outline outline-black/5">
      <img
        src={"../src/assets/" + props.foodData.imgName}
        className="w-20 mr-2"
      />

      <div className="flex flex-col w-full">
        <h1 className="mb-5 text-xl">{props.foodData.title}</h1>
        <div className="mb-5">
          <span>
            <u>Ingredients:</u>
          </span>
          <ul>
            {props.foodData.ingredients.map((ingredient, i) => (
              <li key={i}>
                <i>{ingredient}</i>
              </li>
            ))}
          </ul>
        </div>
        <p className="font-bold">
          Price: {props.foodData.price + props.foodData.currency}
        </p>
        <span>Quantity: {props.foodData.quantity}</span>
      </div>
      <Button
        icon="fa-solid fa-cart-plus"
        styles="px-3 py-1.5 text-sm font-medium rounded-md bg-blue-500 hover:bg-blue-600 text-white transition-colors"
      />
    </li>
  );
}
export default Food;
