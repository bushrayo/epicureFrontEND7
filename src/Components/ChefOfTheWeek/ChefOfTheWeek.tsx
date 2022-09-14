import React, { useState } from "react";
import Carusela from "../Carusela/Carusela";
import WindowSize from "../../helpers/WindowSize";
//import { ChefsArray, DishesDataArray } from "../../services/RestuarantsData";
//import { DishesDataArray } from "../../services/RestuarantsData";
import { Chefs, Restuarants } from "../../services/RestuarantsData";
import { useSelector } from "react-redux";

import ChefOfTheWeekCard from "../Cards/ChefOfTheWeekCard/ChefOfTheWeekCard";
import {
  Body,
  ChefDetails,
  TextHeader,
  CaruselaDiv,
  ChefImageDiv,
  ChefNameBlock,
  ChefName,
  Paragraph,
  DesktopChefOfTheWeek,
} from "./Style";

export default function ChefOfTheWeek() {
  const windowSize = WindowSize();
  //const [avalibale, setAvalibale] = useState(false);
  const ChefOfTheWeekArrayRestaurants: any[] = [];
  const theCaruselaType: string = "ChefOfTheWeek";
  const address: string = "Chef Of The Week: ";
  let TheChefOfTheWeekObject: any = {};
  let ChefsArray: Chefs[] = [];
  let RestaurantsDataArray: Restuarants[] = [];

  let chefImage = "";
  let chefName = "";
  let TheShefDescription = "";

  ChefsArray = useSelector((state: any) => state.chefs.value);
  RestaurantsDataArray = useSelector((state: any) => state.restaurants.value);

  ChefsArray.filter((el) => el.IsChefOfTheWeek === true).map((el) => {
    TheChefOfTheWeekObject = el;
  });

  RestaurantsDataArray.filter(
    (el) => el.ChefName === TheChefOfTheWeekObject.ChefName
  )
    .slice(0, 3)
    .map((RestaurantData) => {
      ChefOfTheWeekArrayRestaurants.push({
        DishName: RestaurantData.Name,
        ImageURL: RestaurantData.ImageURL,
      });
    });

  chefImage = TheChefOfTheWeekObject.ImageURL;
  chefName = TheChefOfTheWeekObject.ChefName;
  TheShefDescription = TheChefOfTheWeekObject.TheShefDescription;

  return (
    <Body>
      <TextHeader>{address}</TextHeader>
      <ChefDetails>
        <ChefImageDiv chefImage={chefImage}>
          <ChefNameBlock>
            <ChefName>{chefName}</ChefName>
          </ChefNameBlock>
        </ChefImageDiv>

        <Paragraph>{TheShefDescription} </Paragraph>
      </ChefDetails>
      <Paragraph>{address} </Paragraph>
      {windowSize < 768 ? (
        <CaruselaDiv>
          <Carusela
            TheArray={ChefOfTheWeekArrayRestaurants}
            caruselaType={theCaruselaType}
          />
        </CaruselaDiv>
      ) : (
        <DesktopChefOfTheWeek>
          {ChefOfTheWeekArrayRestaurants.map((obj) => (
            <ChefOfTheWeekCard theObj={obj} />
          ))}
        </DesktopChefOfTheWeek>
      )}
    </Body>
  );
}
