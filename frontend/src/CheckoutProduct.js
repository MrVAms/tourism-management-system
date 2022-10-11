import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  const [{}, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      img: img,
      location: location,
      title: title,
      description: description,
      star: star,
      price: price,
      total: total,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={img} alt="" />
      <div className=" checkoutProduct__info">
        <p className="checkoutProduct__location">{location}</p>
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__description">{description}</p>
        <p className="checkoutProduct__star">{star}</p>
        <p className="checkoutProduct__price">{price}</p>
        <p className="checkoutProduct__total">{total}</p>
        <div>
          <button onClick={removeFromBasket}>Cancel Booking</button>
          <button>Payment</button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
