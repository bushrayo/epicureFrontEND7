import React from "react";
import { Body, Navbar, NavLink, LastLink } from "./StyleNavbar";

interface Props {
  setClickedLink: (params: any) => any;
}

export default function NavBarChefs({ setClickedLink }: Props) {
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
        <LastLink
          to="#MostViewd"
          onClick={() => {
            handelCLick("MostViewd");
          }}
        >
          {" "}
          Most View{" "}
        </LastLink>
      </Navbar>
    </Body>
  );
}
