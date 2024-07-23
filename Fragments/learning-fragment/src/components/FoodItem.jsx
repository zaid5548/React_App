import Item from "./Item";

const FoodItems = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <Item key={item} food={item} />
      ))}
    </>
  );
};

export default FoodItems;
