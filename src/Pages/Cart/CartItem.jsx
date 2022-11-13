import axios from "axios";
import "./CartItem.css";
export default function CartItem({ item, deleteCartFun }) {
  const handleDelete = (id) => {
    deleteCartFun(id);
  };
  return (
    <div className="cart-item-container">
      <div className="cart-item-left-section">
        <button onClick={() => handleDelete(item.id)} className="cross-btn">
          x
        </button>
        <img src={item.image} className="cart-irem-img" alt="" />
        <p className="bold-text"> {item.name} </p>
      </div>
      <div className="cart-item-right-section">
        <p className="line-through">₹ {item.oldPrice}</p>
        <p className="bold-text">{item.newPrice}₹</p>
      </div>
    </div>
  );
}
