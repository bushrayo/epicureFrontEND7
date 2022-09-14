import React from "react";
import { Body, TextHeader, CaruselaDiv } from "./MobileStyle";
import { DesktopSignatureDish } from "./DesktopStyle";
import { DishesDataArray } from "../../services/RestuarantsData";
import Carusela from "../Carusela/Carusela";
import CardSignatureDish from "../Cards/CardSignatureDish/CardSignatureDish";
import WindowSize from "../../helpers/WindowSize";
import { useSelector } from "react-redux";
import { Dishes } from "../../services/RestuarantsData"; //get dishes interface

export default function SignatureDish() {
  const windowSize = WindowSize();
  const TheSignatureDishArray: object[] = [];
  const theSignatureDish: string = "SignatureDish";
  const address: string = "SIGNATURE DISH OF:";
  let DishesDataArray: Dishes[] = useSelector(
    (state: any) => state.dishes.value
  );

  DishesDataArray.filter((el) => el.IsSignatureDish === true)
    .slice(0, 3)
    .map((SignatureDish) => {
      TheSignatureDishArray.push({
        Name: SignatureDish.Name,
        DishDescription: SignatureDish.DishDescription,
        DisheUrlImage: SignatureDish.DisheUrlImage,
        typeIcon: SignatureDish.typeIcon,
        Price: SignatureDish.Price,
      });
    });

  return (
    <Body>
      <TextHeader>{address}</TextHeader>
      {windowSize < 768 ? (
        <CaruselaDiv>
          <Carusela
            TheArray={TheSignatureDishArray}
            caruselaType={theSignatureDish}
          />
        </CaruselaDiv>
      ) : (
        <DesktopSignatureDish>
          {TheSignatureDishArray.map((obj) => (
            <CardSignatureDish theObj={obj} />
          ))}
        </DesktopSignatureDish>
      )}
    </Body>
  );
}
