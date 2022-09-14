import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Body,
  AddressDiv,
  Address,
  NavDiv,
  MachChefsDiv,
  ChefImageDiv,
  ChefNameBlock,
  ChefName,
} from "./Style";
import { Chefs } from "../../services/RestuarantsData"; // get interfaces
import NavBarChefs from "./NavBar/NavBarChefs";
//import { RestuarantsDataArray } from "../../services/RestuarantsData";
import ChefOfTheWeekCard from "../Cards/ChefOfTheWeekCard/ChefOfTheWeekCard";
import { useSelector } from "react-redux";
import { IsMostViewed } from "../../helpers/IsMostViewed";

export default function ChefsPage() {
  const [clickedLink, setClickedLink] = useState("All");
  const navigate = useNavigate();
  const AllTheChefsArray: Chefs[] = useSelector(
    (state: any) => state.chefs.value
  );
  const NewChefsArray: Chefs[] = AllTheChefsArray.filter(
    (el) => el.IsNew === true
  );

  // const MostViewChefsArray: Chefs[] = AllTheChefsArray.filter(
  //   (el) => el.IsFavorite === true
  // );
  const MostViewChefsArray: Chefs[] = IsMostViewed();

  let arrayToShow: Chefs[] = [];

  const chooseFilter = () => {
    switch (clickedLink) {
      case "All":
        arrayToShow = AllTheChefsArray;
        break;
      case "New":
        arrayToShow = NewChefsArray;
        break;
      case "MostViewd":
        arrayToShow = MostViewChefsArray;
        break;
    }
  };
  chooseFilter();

  return (
    <Body>
      <AddressDiv>
        <Address>chefs</Address>
      </AddressDiv>
      <NavDiv>
        <NavBarChefs setClickedLink={setClickedLink} />
      </NavDiv>
      <MachChefsDiv>
        {arrayToShow.map((obj) => (
          <ChefImageDiv chefImage={obj.ImageURL}>
            <ChefNameBlock>
              <ChefName>{obj.ChefName}</ChefName>
            </ChefNameBlock>
          </ChefImageDiv>
        ))}
      </MachChefsDiv>
    </Body>
  );
}
