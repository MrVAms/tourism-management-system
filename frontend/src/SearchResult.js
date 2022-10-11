import React from "react";
import "./SearchResult.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "./StateProvider";

function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  const [{}, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        img: img,
        location: location,
        title: title,
        description: description,
        star: star,
        price: price,
        total: total,
      },
    });
  };
  return (
    <div className="searchResult">
      <img src={img} alt="" />
      <FavoriteBorderIcon className="searchResult__heart" />
      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>____</p>
          <p>{description}</p>
        </div>

        <div className="searchResult__infoBottom">
          <div className="searchResult__stars">
            <StarIcon className="searchResult__star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchResult__price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
          <div>
            <button onClick={addToBasket}>BookNow</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
