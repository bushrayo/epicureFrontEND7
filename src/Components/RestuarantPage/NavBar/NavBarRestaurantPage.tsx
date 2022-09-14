import React from "react";
import { Body, Navbar, NavLink, LastLink } from "./StyleNavbar";

interface Props {
  setClickedLink: (params: any) => any;
}

export default function NavBarRestaurantPage({ setClickedLink }: Props) {
  const handelCLick = (clickedName: string) => {
    setClickedLink(clickedName);
  };
  return (
    <Body>
      <Navbar>
        <NavLink
          to="#Breakfast"
          onClick={() => {
            handelCLick("Breakfast");
          }}
        >
          {" "}
          Breakfast{" "}
        </NavLink>
        <NavLink
          to="#Lanch"
          onClick={() => {
            handelCLick("Lanch");
          }}
        >
          {" "}
          Lanch{" "}
        </NavLink>
        <LastLink
          to="#Dinner"
          onClick={() => {
            handelCLick("Dinner");
          }}
        >
          {" "}
          Dinner{" "}
        </LastLink>
      </Navbar>
    </Body>
  );
}
