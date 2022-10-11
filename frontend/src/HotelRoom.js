import React from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

function HotelRoom() {
  return (
    <div className="searchPage">
      <SearchResult
        img="./assets/familypackage1.jpg"
        location="Gulmi"
        title="Treeking with family"
        description="Lovely Greenary"
        star={4.73}
        price="$30/night"
        total="$117"
      />

      <SearchResult
        img="./assets/familypackage2.jpg"
        location="Enjoy Terai"
        title="Hotty tour"
        description="time with family"
        star={4.73}
        price="$30/night"
        total="$117"
      />

      <SearchResult
        img="./assets/familypackage3.jpg"
        location="jungle safaari"
        title="Family time"
        description="-1 guest -1 bedrooom -1 bed -wifi -kitchen -free parking"
        star={4.73}
        price="$30/night"
        total="$117"
      />

      <SearchResult
        img="./assets/familypackage4.jpg"
        location="Private room in lakeside"
        title="Lunch with Family"
        description="-1 guest -1 bedrooom -1 bed -wifi -kitchen -free parking"
        star={4.73}
        price="$30/night"
        total="$117"
      />

      <SearchResult
        img="./assets/familypackage5.jpg"
        location="Private flat in lakeside"
        title="Enjoy the Lake"
        description="-1 guest -2 bedrooom -1 bed -wifi -kitchen -free parking"
        star={4.73}
        price="$30/night"
        total="$117"
      />

      <SearchResult
        img="./assets/familypackage6.jpg"
        location="jhamsikhel"
        title="Family Resort"
        description="-1 Hall -1 bedrooom -1 bed -wifi -kitchen -free parking"
        star={4.73}
        price="$30/night"
        total="$117"
      />
    </div>
  );
}

export default HotelRoom;
