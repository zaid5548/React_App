const Item = ({food}) =>{
    return <>
        <li key={food} className="list-group-item">
          {food}
        </li>
    </>
}

export default Item;