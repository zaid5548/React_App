import styles from "./FoodInput.module.css"

const FoodInput=({handleOnChange,addFoodItem})=>{


    const handleOnChange1=(e)=>{
        console.log(e.target.value)
        // console.log("Enter a value")
    }

    return <>
        {/* <input placeholder="Enter Food Item Here" className={`${styles["foodInput"]}`} type="text" 
        onChange={(e)=> handleOnChange1(e)}
        /> */}
        <input id="foodInput" placeholder="Enter Food Item Here" className={`${styles["foodInput"]}`} type="text" 
        onChange={handleOnChange} />
        <button className={`${styles["addFood"]}`} 
        onClick={addFoodItem} >add</button>
    </>
}

export default FoodInput