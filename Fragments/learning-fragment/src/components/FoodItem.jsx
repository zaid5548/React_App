import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ items }) => {
  const [activeItems, setActiveItems] = useState([]);

  const onByButton = (item, event) => {
    let newItems=[...activeItems,item]
    setActiveItems(newItems)
    // setActiveItems((prevActiveItems)=>[...activeItems,item])
  };

  return (
    <>
      {items.map((item) => (
        <Item
          key={item}
          food={item}
          bought={activeItems.includes(item)}
          handleByClick={(event) => onByButton(item, event)}
        />
      ))}
    </>
  );
};

export default FoodItems;
