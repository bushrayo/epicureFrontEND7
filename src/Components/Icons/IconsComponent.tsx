import React from "react";
import {
  Body,
  IconsDiv,
  EachIconsDiv,
  Address,
  Text,
  ImageDiv,
  IconImage,
} from "./Style";
import { SpicyIcon, VegitarianIcon, VeganIcon } from "../../services/imagesURL";

export default function IconsComponent() {
  return (
    <Body>
      <Address>Icons meaning</Address>

      <IconsDiv>
        <EachIconsDiv>
          <IconImage src={SpicyIcon} />
          {/* <ImageDiv srcImage={SpicyIcon} /> */}
          <Text>Spicy</Text>
        </EachIconsDiv>

        <EachIconsDiv>
          {/* <ImageDiv srcImage={VegitarianIcon} /> */}
          <IconImage src={VegitarianIcon} />
          <Text>Vegitarian</Text>
        </EachIconsDiv>

        <EachIconsDiv>
          {/* <ImageDiv srcImage={VeganIcon} /> */}
          <IconImage src={VeganIcon} />
          <Text>Vegan</Text>
        </EachIconsDiv>
      </IconsDiv>
    </Body>
  );
}
