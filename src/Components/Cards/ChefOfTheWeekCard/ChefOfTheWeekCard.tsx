import React, { useState } from "react";
import { Body, ImageDiv, Text, Details } from "./Style";

interface Props {
  theObj: object;
}

export default function ChefOfTheWeekCard(props: Props) {
  let DishName: string = "";
  let ImageURL: string = "";

  Object.entries(props.theObj).map(([key, value]) => {
    if (key === "DishName") DishName = value;
    if (key === "ImageURL") ImageURL = value;
  });

  return (
    <Body>
      <ImageDiv srcImage={ImageURL}></ImageDiv>
      <Details>
        <Text>{DishName}</Text>
      </Details>
    </Body>
  );
}
