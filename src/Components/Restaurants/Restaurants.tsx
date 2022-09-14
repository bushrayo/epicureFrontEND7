import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Body, AddressDiv, Address, NavDiv, MachRestaurantsDiv } from "./Style";
import NavBarRestaurants from "./NavBar/NavBarRestaurants";
//import { RestuarantsDataArray } from "../../services/RestuarantsData";
import Card from "../Cards/ResturantsPageCard/Card";
import { Restuarants } from "../../services/RestuarantsData";
import { useSelector } from "react-redux";
import { IsOpenNow } from "../../helpers/IsOpenNow";
import { IsNew } from "../../helpers/IsNew";

export default function Restaurants() {
  const [clickedLink, setClickedLink] = useState("All");
  const navigate = useNavigate();
  const RestuarantsDataArray = useSelector(
    (state: any) => state.restaurants.value
  );
  const AllTheRestaurantsArray: Restuarants[] = RestuarantsDataArray;

  const NewRestaurantsArray: Restuarants[] = RestuarantsDataArray.filter(
    (el: { FoundedYear: number }) => IsNew(el.FoundedYear)
  );

  const OpenRestaurantsArray: Restuarants[] = RestuarantsDataArray.filter(
    (el: { OpeningHours: string; CloseingHour: string }) =>
      IsOpenNow(el.OpeningHours, el.CloseingHour)
  );

  const PupularRestaurantsArray: Restuarants[] = RestuarantsDataArray.filter(
    (el: { IsFavorite: boolean }) => el.IsFavorite === true
  );

  let arrayToShow: Restuarants[] = [];
  const chooseFilter = () => {
    switch (clickedLink) {
      case "All":
        arrayToShow = AllTheRestaurantsArray;
        break;
      case "New":
        arrayToShow = NewRestaurantsArray;
        break;
      case "Popular":
        arrayToShow = PupularRestaurantsArray;
        break;
      case "Open":
        arrayToShow = OpenRestaurantsArray;
        break;
    }
  };
  chooseFilter();

  return (
    <Body>
      <AddressDiv>
        <Address>resturant</Address>
      </AddressDiv>
      <NavDiv>
        <NavBarRestaurants setClickedLink={setClickedLink} />
      </NavDiv>
      <MachRestaurantsDiv>
        {arrayToShow.map((obj) => (
          <Card theObj={obj} />
        ))}
      </MachRestaurantsDiv>
    </Body>
  );
}
