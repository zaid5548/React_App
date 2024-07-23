import Item from "./Item";

const FoodItems = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <Item food={item} />
      ))}
    </>
  );
};

export default FoodItems;
