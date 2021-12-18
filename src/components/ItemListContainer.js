import "../css/itemListContainer.css";
import Count from "./ItemCount"

const ItemListContainer = ( {greeting} ) => {
    return (
        <div className="itemListContainer">
            {greeting}!
            <Count stock={15} initial={1}/>
        </div>
    )
}

export default ItemListContainer
