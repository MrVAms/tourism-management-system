import { Button } from "@mui/material";
import React from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays .26 agust to 30 agust .2guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation flexibiltity</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
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

export default SearchPage;
