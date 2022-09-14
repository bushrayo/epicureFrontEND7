import React, { useEffect } from "react";
import MobileHome from "../MobileHome/MobileHome";
import DesktopHome from "../DesktopHome/DesktopHome";
import WindowSize from "../../helpers/WindowSize";
import { useDispatch, useSelector } from "react-redux";

import { setRestaurants } from "../../services/Slicer/restaurantsSlicer";
import fetchRestaurants from "../../services/FechData/FetchRestaurants";

import { setChefs } from "../../services/Slicer/chefsSlicer";
import fetchChefs from "../../services/FechData/FetchChefs";

import { setDishes } from "../../services/Slicer/dishesSlicer";
import fetchDishes from "../../services/FechData/FetchDishes";

export default function Home() {
  const dispatch = useDispatch();
  const windowSize = WindowSize();

  useEffect(() => {
    async function fetchFunction() {
      const dishResponse = await fetchDishes();
      dispatch(setDishes(dishResponse));

      const chefResponse = await fetchChefs();
      dispatch(setChefs(chefResponse));

      const restaurantsResponse = await fetchRestaurants();
      dispatch(setRestaurants(restaurantsResponse));
    }

    fetchFunction();
  }, []);

  return <div>{windowSize < 768 ? <MobileHome /> : <DesktopHome />}</div>;
}
