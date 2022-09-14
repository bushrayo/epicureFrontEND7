import React from "react";
import { Body, Button } from "./Style";
import PopularRestaurants from "../PopularRestaurants/PopularRestaurants";
import HeroMobile from "../HeroMobile/HeroMobile";
import SignatureDish from "../SignatureDish/SignatureDish";
import IconsComponent from "../Icons/IconsComponent";
import ChefOfTheWeek from "../ChefOfTheWeek/ChefOfTheWeek";
import DownloadsComponent from "../DownloadsComponent/DownloadsComponent";
import { useNavigate } from "react-router-dom";

export default function Container() {
  const navigate = useNavigate();
  let allRestaurants: string = "ALL RESTAURANTS >>";

  const goToRestaurants = () => {
    navigate("/restaurants");
  };

  return (
    <Body>
      <HeroMobile />
      <PopularRestaurants />
      <Button onClick={goToRestaurants}>{allRestaurants} </Button>
      <SignatureDish />
      <Button onClick={goToRestaurants}>{allRestaurants}</Button>
      <IconsComponent />
      <ChefOfTheWeek />
      <Button onClick={goToRestaurants}>{allRestaurants}</Button>
      <DownloadsComponent />
    </Body>
  );
}
