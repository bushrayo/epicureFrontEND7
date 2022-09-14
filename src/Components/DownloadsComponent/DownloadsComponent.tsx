import React from "react";
import { logo, AppStore, GooglePlay } from "../../services/imagesURL";
import { Body, Address, ImageDiv, Paragraph, MobileImage } from "./MobileStyle";
import {
  DesktopBody,
  LeftSide,
  DesktopAddress,
  DesktopImageDiv,
  DesktopParagraph,
  RightSide,
  DesktopIconDiv,
  DesktopImage,
} from "./DesktopStyle";
import WindowSize from "../../helpers/WindowSize";

export default function DownloadsComponent() {
  const windowSize = WindowSize();
  const address: string = "About Us:";
  const aboutUSparagraph: string =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non eu ipsum. Cras porta malesuada eros, eget blandit turpis suscipit at. Vestibulum sed massa in magna sodales porta. Vivamus elit urna, dignissim a vestibulum.";

  return (
    <div>
      {windowSize < 768 ? (
        <Body>
          <MobileImage src={logo} />
          <MobileImage src={AppStore} />
          <MobileImage src={GooglePlay} />
          {/* <ImageDiv logo={logo} />
          <ImageDiv logo={AppStore} />
          <ImageDiv logo={GooglePlay} /> */}
          <Address>{address} </Address>
          <Paragraph>{aboutUSparagraph} </Paragraph>
        </Body>
      ) : (
        <DesktopBody>
          <LeftSide>
            <DesktopAddress>{address} </DesktopAddress>
            <DesktopParagraph>{aboutUSparagraph} </DesktopParagraph>
            <DesktopImage src={AppStore} />
            <DesktopImage src={GooglePlay} />
            {/* <DesktopImageDiv logo={AppStore} />
            <DesktopImageDiv logo={GooglePlay} /> */}
          </LeftSide>
          <RightSide>
            <DesktopIconDiv logo={logo} />
          </RightSide>
        </DesktopBody>
      )}
    </div>
  );
}
