import React from "react";
import { Body, FooterLink, MainDiv } from "./Style";

export default function Footer() {
  return (
    <MainDiv>
      <Body>
        <FooterLink to="/contactUs"> Contact Us </FooterLink>
        <FooterLink to="/termOfUse"> Term of Use </FooterLink>
        <FooterLink to="/termOfUse"> Privacy Policy </FooterLink>
      </Body>
    </MainDiv>
  );
}
