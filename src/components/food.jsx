import Button from "./button";

function Food(props) {
  return (
    <li className="">
      <img src={props.foodData.imgPath} />
      <h1>{props.foodData.title}</h1>
      <p>{props.foodData.ingredients}</p>
      <p>{props.foodData.price + props.foodData.currency}</p>
      <Button text="❌" />
    </li>
  );
}
export default Food;
