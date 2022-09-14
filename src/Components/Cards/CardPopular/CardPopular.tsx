import React, { useState } from "react";
import { Body, ImageDiv, TextDiv, Text, SText, Details } from "./Style";

interface Props {
  theObj: object;
}

export default function CardPopular(props: Props) {
  let Name: string = "";
  let ImageURL: string = "";
  let ChefName: string = "";

  Object.entries(props.theObj).map(([key, value]) => {
    if (key === "Name") Name = value;
    if (key === "ChefName") ChefName = value;
    if (key === "ImageURL") ImageURL = value;
  });

  return (
    <Body>
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
