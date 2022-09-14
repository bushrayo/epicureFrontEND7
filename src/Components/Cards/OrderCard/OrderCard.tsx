import React, { useState } from "react";
import {
  Body,
  ImageDiv,
  TextDiv,
  Text,
  TextName,
  SText,
  Details,
  PriceDiv,
  ShekelText,
} from "./Style";

interface Props {
  theObj: object;
}

export default function OrderCard(props: Props) {
  let name: string = "";
  let image: string = "";
  let price: number = 0;
  let amount: number = 0;
  let chooseSide: string = "";
  let changes: String[] = [];

  Object.entries(props.theObj).map(([key, value]) => {
    if (key === "name") name = value;
    if (key === "image") image = value;
    if (key === "chooseSide") chooseSide = value;
    if (key === "changes") changes = value;
    if (key === "amount") amount = value;
    if (key === "price") price = value;
  });
  let priceWithShekel: string = "₪" + price;
  // console.log(changes);

  return (
    <Body>
      <ImageDiv srcImage={image}></ImageDiv>
      <Details>
        <TextDiv>
          <Text>{amount}</Text>
          <Text>x</Text>
          <TextName>{name}</TextName>
        </TextDiv>

        <TextDiv>
          <SText>{chooseSide} | </SText>

          {changes.map((obj) => (
            <SText>{obj}</SText>
          ))}
        </TextDiv>

        <PriceDiv>
          <ShekelText>{priceWithShekel}</ShekelText>
        </PriceDiv>
      </Details>
    </Body>
  );
}
