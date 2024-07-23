import styles from "../Item.module.css"

const Item = ({food}) =>{
    return <>
        <li className={`${styles.kgItem}`}>
          {food}
        </li>
    </>
}

export default Item;