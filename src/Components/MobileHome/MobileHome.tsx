import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Body } from "./Style";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Restaurants from "../Restaurants/Restaurants";
import Chefs from "../Chefs/Chefs";
import Container from "../Container/Container";
import ContactUs from "../ContactUs/ContactUs";
import TermOfUse from "../TermOfUse/TermOfUse";
import RestaurantPage from "../RestuarantPage/RestaurantPage";
import DishPage from "../DishPage/DishPage";

export default function MobileHome() {
  return (
    <Body>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="home" element={<Container />} />
          <Route path="" element={<Container />} />
          <Route path="restaurants" element={<Restaurants />} />
          <Route path="chefs" element={<Chefs />} />
          <Route path="contactUs" element={<ContactUs />} />
          <Route path="termOfUse" element={<TermOfUse />} />
          <Route path="restaurantPage" element={<RestaurantPage />} />
          <Route path="dishPage" element={<DishPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </Body>
  );
}
