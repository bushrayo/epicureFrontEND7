import React, { useState } from "react";
//import { useLocation } from "react-router-dom"; // for "sending props with navigate"
import { Dishes } from "../../services/RestuarantsData";
import {
  Body,
  ImageDiv,
  TextDiv,
  OpenNowDiv,
  ClockImg,
  Text,
  SText,
  Details,
  NavDiv,
  MachRestaurantsDiv,
} from "./Style";
import NavBarRestaurantPage from "./NavBar/NavBarRestaurantPage";
import CardSignatureDish from "../Cards/CardSignatureDish/CardSignatureDish";
import { useSelector } from "react-redux";
import { IsOpenNow } from "../../helpers/IsOpenNow";

export default function RestaurantPage() {
  // const location: any = useLocation();
  //const theRestaurantObject: Restuarants = location.state.restaurantObject;
  const DishesArray = useSelector((state: any) => state.dishes.value);
  const theRestaurantObject = useSelector(
    (state: any) => state.clickedRestaurant.value
  );

  //const clockImage: string = "/Assets/images/clockImage.svg";
  let isOpen: boolean = false;
  if (JSON.stringify(theRestaurantObject) !== "{}") {
    isOpen = IsOpenNow(
      theRestaurantObject.OpeningHours,
      theRestaurantObject.CloseingHour
    );
  }

  const OpenNow: string = isOpen ? "    Open Now" : " Close Now";
  const [clickedLink, setClickedLink] = useState("Breakfast");
  const DishesArrayForThisRestarant: Dishes[] = DishesArray.filter(
    (el: { RestaurantName: string }) =>
      el.RestaurantName === theRestaurantObject.Name
  );

  const BreakfastDishesArray: Dishes[] = DishesArrayForThisRestarant.filter(
    (el) => el.TimeToEat.includes("breakfast")
  );

  const LanchDishesArray: Dishes[] = DishesArrayForThisRestarant.filter((el) =>
    el.TimeToEat.includes("lanch")
  );

  const DinnerDishesArray: Dishes[] = DishesArrayForThisRestarant.filter((el) =>
    el.TimeToEat.includes("dinner")
  );

  let arrayToShow: Dishes[] = [];

  const chooseFilter = () => {
    switch (clickedLink) {
      case "Breakfast":
        arrayToShow = BreakfastDishesArray;
        break;
      case "Lanch":
        arrayToShow = LanchDishesArray;
        break;
      case "Dinner":
        arrayToShow = DinnerDishesArray;
        break;
    }
  };
  chooseFilter();

  return (
    <Body>
      <ImageDiv srcImage={theRestaurantObject.ImageURL}></ImageDiv>
      <Details>
        <TextDiv>
          <Text>{theRestaurantObject.Name}</Text>
        </TextDiv>

        <TextDiv>
          <SText>{theRestaurantObject.ChefName}</SText>
        </TextDiv>

        <OpenNowDiv>
          <ClockImg />
          {/* <ClockImg src={clockImage} alt="" /> */}
          <SText>{OpenNow}</SText>
        </OpenNowDiv>
      </Details>

      <NavDiv>
        <NavBarRestaurantPage setClickedLink={setClickedLink} />
      </NavDiv>
      <MachRestaurantsDiv>
        {arrayToShow.map((obj) => (
          <CardSignatureDish theObj={obj} />
        ))}
      </MachRestaurantsDiv>
    </Body>
  );
}
