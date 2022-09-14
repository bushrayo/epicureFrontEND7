import React from "react";
import { Body, Navbar, NavLink, LastLink } from "./StyleNavbar";

interface Props {
  setClickedLink: (params: any) => any;
}

export default function NavBarRestaurants({ setClickedLink }: Props) {
  const handelCLick = (clickedName: string) => {
    setClickedLink(clickedName);
  };
  return (
    <Body>
      <Navbar>
        <NavLink
          to="#all"
          onClick={() => {
            handelCLick("All");
          }}
        >
          {" "}
          All{" "}
        </NavLink>
        <NavLink
          to="#New"
          onClick={() => {
            handelCLick("New");
          }}
        >
          {" "}
          New{" "}
        </NavLink>
        <NavLink
          to="#Pupular"
          onClick={() => {
            handelCLick("Popular");
          }}
        >
          {" "}
          Most Popular{" "}
        </NavLink>
        <LastLink
          to="#Open"
          onClick={() => {
            handelCLick("Open");
          }}
        >
          {" "}
          Open Now{" "}
        </LastLink>
      </Navbar>
    </Body>
  );
}
