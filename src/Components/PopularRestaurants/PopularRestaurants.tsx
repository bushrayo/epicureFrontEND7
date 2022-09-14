import React, { useState } from "react";
import Carusela from "../Carusela/Carusela";
import { Body, TextHeader, CaruselaDiv } from "./MobileStyle";
import { DesktopPopularRestaurants } from "./DesktopStyle";
import WindowSize from "../../helpers/WindowSize";
import CardPopular from "../Cards/CardPopular/CardPopular";
import { Restuarants } from "../../services/RestuarantsData";
import { useSelector } from "react-redux";

export default function PopularRestaurants() {
  const windowSize = WindowSize();
  const RestuarantsDataArray = useSelector(
    (state: any) => state.restaurants.value
  );
  const ThePopularRestaurantsArray: object[] = [];
  const theCaruselaType: string = "PopularRestaurants";
  const address: string = "popular restaurant in epicure:";

  RestuarantsDataArray.filter(
    (el: { IsFavorite: boolean }) => el.IsFavorite === true
  )
    .slice(0, 3)
    .map((favResturant: { Name: any; ImageURL: any; ChefName: any }) => {
      ThePopularRestaurantsArray.push({
        Name: favResturant.Name,
        ImageURL: favResturant.ImageURL,
        ChefName: favResturant.ChefName,
      });
    });

  return (
    <Body>
      <TextHeader>{address}</TextHeader>
      {windowSize < 768 ? (
        <CaruselaDiv>
          <Carusela
            TheArray={ThePopularRestaurantsArray}
            caruselaType={theCaruselaType}
          />
        </CaruselaDiv>
      ) : (
        <DesktopPopularRestaurants>
          {ThePopularRestaurantsArray.map((obj) => (
            <CardPopular theObj={obj} />
          ))}
        </DesktopPopularRestaurants>
      )}
    </Body>
  );
}
function setRestuarantsDataArray2(RestuarantsDataArray: Restuarants[]) {
  throw new Error("Function not implemented.");
}
