import { useDispatch, useSelector } from "react-redux"
import { bagActions } from "../store/bagSlice copy";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const HomeItem=({item})=>{

const dispatch=useDispatch();
const bagItems=useSelector(store=>store.bag);
const elementFound=bagItems.indexOf(item.id)>=0;
console.log(elementFound)
console.log(item.id)

const handleAddToBag = () => {
  dispatch(bagActions.addToBag(item.id));
};
const handleRemove=()=>{
  dispatch(bagActions.removeFromBag(item.id));
}
 return(
  <div className="item-container">
    <img className="item-image" src={item.image} alt="item image" />
   <div className="company-name">{item.company_name}</div>
    <div className="item-name">{item.item_name}</div>
    <div className="price">
    <span className="current-price">Rs {item.current_price}</span>
    <span className="original-price">Rs {item.original_price}</span>
    <span className="discount">({item.discount_percentage}% OFF)</span>
    </div>
    <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
    {/* <button className="btn-add-bag" 
    onClick={handleAddToBag}>Add to Bag
    </button> */}
    {elementFound?
    <button type="button" className="btn btn-danger btn-add-bag" onClick={handleRemove}> <MdDelete />  Remove from bag</button>:
    <button type="button" className="btn btn-success btn-add-bag" onClick={handleAddToBag}><IoIosAddCircleOutline />   Add to bag</button>
    }


  </div>
 )
}
export default HomeItem