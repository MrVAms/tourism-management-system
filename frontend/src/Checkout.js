import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct.js";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <img
        className="checkout__ad"
        src="https://www.topluxury.asia/wp-content/uploads/2018/05/pangu-7-star-hotel-beijing-presidential-suite-02.jpg"
        alt=""
      />
      {basket?.length == 0 ? (
        <div>
          <h2>You Haven't Booked Any Packages </h2>
        </div>
      ) : (
        <div>
          <h2>Your packages</h2>
          {basket?.map((item) => (
            <CheckoutProduct
              img={item.img}
              location={item.location}
              title={item.title}
              description={item.description}
              star={item.star}
              price={item.price}
              total={item.total}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout;
