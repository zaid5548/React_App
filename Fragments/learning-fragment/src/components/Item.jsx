import styles from "../Item.module.css";

const Item = ({ food,handleByClick,bought }) => {

  const handleAlertByClick=(e) =>{
    console.log(e)
    console.log(`${food} by Clicked`)
  }

  return (
    <>
      <li className={`${styles["kgItem"]} list-group-item ${bought ? "active":""} `}>
        <span className={styles["kg-span"]}>{food}</span>
        <button className={`${styles["button"]} btn btn-info`} 
        onClick={handleByClick}
        >Bye</button>
      </li>
    </>
  );
};

export default Item;
