import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Link to="hotelroom" style={{ textDecoration: "none" }}>
          <Card
            src="https://www.topluxury.asia/wp-content/uploads/2018/05/pangu-7-star-hotel-beijing-presidential-suite-02.jpg"
            title="Entire flat"
            description="Spaces that are more than just a place to sleep."
          />
        </Link>
        <Link to="/hotelroom" style={{ textDecoration: "none" }}>
          <Card
            src="https://www.topluxury.asia/wp-content/uploads/2018/05/pangu-7-star-hotel-beijing-presidential-suite-02.jpg"
            title="Entire flat"
            description="Spaces that are more than just a place to sleep."
          />
        </Link>
        <Link to="/hotelroom" style={{ textDecoration: "none" }}>
          <Card
            src="https://cdn1.goibibo.com/voy_mmt/t_g/htl-imgs/201807201804409400-01ad733690cd11e8be250224510f5e5b.jpg"
            title="Unique stays"
            description="Unique spaces with your loved one."
          />
        </Link>
        <Link to="hotelroom" style={{ textDecoration: "none" }}>
          <Card
            src="https://img.traveltriangle.com/blog/wp-content/uploads/2019/11/Treks-In-The-World-cover_18th-Nov.jpg"
            title="Entire Touring Package"
            description="You don’t have to be rich to travel well"
          />
        </Link>
        <Link to="hotelroom" style={{ textDecoration: "none" }}>
          <Card
            src="https://www.picnicwale.com/special-offers/assets/images/family-tour-packages.jpg"
            title="Family Package"
            description="Spaces that are more than just a place to sleep."
          />
        </Link>
        <Link to="hotelroom" style={{ textDecoration: "none" }}>
          <Card
            src="https://www.picnicwale.com/special-offers/assets/images/family-tour-packages.jpg"
            title="Family Package"
            description="Spaces that are more than just a place to sleep."
          />
        </Link>
      </div>
      <div className="home__section">
        <Link to="/hotelroom" style={{ textDecoration: "none" }}>
          <Card
            src="https://i.pinimg.com/originals/0a/e5/1d/0ae51def741d45635d0b8a28d05bf911.jpg"
            title="Deluxe room"
            description="single bed"
            price="Rs1500/night"
          />
        </Link>
        <Link to="/hotelroom" style={{ textDecoration: "none" }}>
          <Card
            src="https://i.pinimg.com/originals/0a/e5/1d/0ae51def741d45635d0b8a28d05bf911.jpg"
            title="Deluxe room"
            description="single bed"
            price="Rs1500/night"
          />
        </Link>
        <Link to="/hotelroom" style={{ textDecoration: "none" }}>
          <Card
            src="https://i.pinimg.com/originals/0a/e5/1d/0ae51def741d45635d0b8a28d05bf911.jpg"
            title="Deluxe room"
            description="single bed"
            price="Rs1500/night"
          />
        </Link>
        <Link to="/hotelroom" style={{ textDecoration: "none" }}>
          <Card
            src="https://i.pinimg.com/originals/0a/e5/1d/0ae51def741d45635d0b8a28d05bf911.jpg"
            title="Deluxe room"
            description="single bed"
            price="Rs1500/night"
          />
        </Link>
        <Link to="/hotelroom" style={{ textDecoration: "none" }}>
          <Card
            src="https://i.pinimg.com/originals/0a/e5/1d/0ae51def741d45635d0b8a28d05bf911.jpg"
            title="Deluxe room"
            description="single bed"
            price="Rs1500/night"
          />
        </Link>
        <Link to="/hotelroom" style={{ textDecoration: "none" }}>
          <Card
            src="https://i.pinimg.com/originals/0a/e5/1d/0ae51def741d45635d0b8a28d05bf911.jpg"
            title="Deluxe room"
            description="single bed"
            price="Rs1500/night"
          />
        </Link>
      </div>
    </div>
  );
}
export default Home;
