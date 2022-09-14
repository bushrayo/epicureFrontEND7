import React, { useState } from "react";
import { Body, ImageDiv, TextDiv, Text, SText, Details } from "./Style";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setClickedRestaurant } from "../../../services/Slicer/clickedRestaurantSlicer";

interface Props {
  theObj: object;
}

export default function Card(props: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let Name: string = "";
  let ImageURL: string = "";
  let ChefName: string = "";

  Object.entries(props.theObj).map(([key, value]) => {
    if (key === "Name") Name = value;
    if (key === "ChefName") ChefName = value;
    if (key === "ImageURL") ImageURL = value;
  });
  const goToRestaurants = () => {
    dispatch(setClickedRestaurant(props.theObj));
    navigate("/restaurantPage");
    //navigate("/restaurantPage", { state: { restaurantObject: props.theObj } });
  };
  return (
    <Body onClick={goToRestaurants}>
      <ImageDiv srcImage={ImageURL}></ImageDiv>
      <Details>
        <TextDiv>
          <Text>{Name}</Text>
        </TextDiv>

        <TextDiv>
          <SText>{ChefName}</SText>
        </TextDiv>
      </Details>
    </Body>
  );
}
