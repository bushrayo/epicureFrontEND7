import React, { useState } from "react";
import {
  Body,
  ImageDiv,
  TextDiv,
  Text,
  SText,
  Details,
  SpicyIcon,
  PriceDiv,
  ShekelText,
  TextDivDescription,
  ButtomDiv,
} from "./Style";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setClickedDish } from "../../../services/Slicer/clickedDishSlicer";

interface Props {
  theObj: object;
}

export default function CardSignatureDish(props: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //const [ShowDishModal, setShowDishModal] = useState(false);

  let Name: string = "";
  let UrlImage: string = "";
  let Description: string = "";
  let TypeIcon: string = "";
  let Price: string = "";

  Object.entries(props.theObj).map(([key, value]) => {
    if (key === "Name") Name = value;
    if (key === "DisheUrlImage") UrlImage = value;
    if (key === "DishDescription") Description = value;
    if (key === "typeIcon") TypeIcon = value;
    if (key === "Price") Price = "₪" + value;
  });

  const goToDish = () => {
    dispatch(setClickedDish(props.theObj));
    //setShowDishModal(true);
    navigate("/dishPage");
    //navigate("/restaurantPage", { state: { restaurantObject: props.theObj } });
  };

  return (
    <Body onClick={goToDish}>
      <ImageDiv srcImage={UrlImage}></ImageDiv>
      <Details>
        <TextDiv>
          <Text>{Name}</Text>
        </TextDiv>

        <TextDivDescription>
          <SText>{Description}</SText>
        </TextDivDescription>

        <ButtomDiv>
          <SpicyIcon type={TypeIcon}></SpicyIcon>

          <PriceDiv>
            <ShekelText>{Price}</ShekelText>
          </PriceDiv>
        </ButtomDiv>
      </Details>
      {/* {ShowDishModal && <DishModal setShowDishModal={setShowDishModal} />} */}
    </Body>
  );
}
