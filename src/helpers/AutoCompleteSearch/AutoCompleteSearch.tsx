import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ResultTable, ResultTableTD, ResultTableTR } from "./Style";
import { useNavigate } from "react-router-dom";
import { setShowSearchModal } from "../../services/Slicer/showSearchModalSlicer";
import { setClickedRestaurant } from "../../services/Slicer/clickedRestaurantSlicer";
import { setClickedDish } from "../../services/Slicer/clickedDishSlicer";
import { Restuarants, Chefs, Dishes } from "../../services/RestuarantsData";

interface Props {
  searchInputProps: string;
}
export default function AutoCompleteSearch(props: Props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //get restaurant, chef, dishes data
  const RestuarantsDataArray = useSelector(
    (state: any) => state.restaurants.value
  );
  const chefsDataArray = useSelector((state: any) => state.chefs.value);
  const dishesDataArray = useSelector((state: any) => state.dishes.value);

  const handleClick = (searchType: string, obj: object) => {
    dispatch(setShowSearchModal(false));
    if (searchType === "restaurants") {
      dispatch(setClickedRestaurant(obj));
      navigate("/restaurantPage");
    } else {
      if (searchType === "dishes") {
        dispatch(setClickedDish(obj));
        navigate("/dishPage");
      } else {
        navigate("/chefs");
      }
    }
  };

  //filter data by match search input
  let restaurantResult: Restuarants[] = [];
  let chefsResult: Chefs[] = [];
  let dishesResult: Dishes[] = [];

  if (props.searchInputProps !== "") {
    RestuarantsDataArray.filter((el: { Name: string }) =>
      el.Name.toLowerCase().startsWith(props.searchInputProps)
    ).map((obj: Restuarants) => restaurantResult.push(obj));

    chefsDataArray
      .filter((el: { ChefName: string }) =>
        el.ChefName.toLowerCase().startsWith(props.searchInputProps)
      )
      .map((obj: Chefs) => chefsResult.push(obj));

    dishesDataArray
      .filter((el: { Name: string }) =>
        el.Name.toLowerCase().startsWith(props.searchInputProps)
      )
      .map((obj: Dishes) => dishesResult.push(obj));
  }

  return (
    <ResultTable>
      {restaurantResult.map((el) => (
        <ResultTableTR onClick={() => handleClick("restaurants", el)}>
          <ResultTableTD>RESTAURANT: </ResultTableTD>
          <ResultTableTD>{el.Name}</ResultTableTD>
        </ResultTableTR>
      ))}
      {chefsResult.map((el) => (
        <ResultTableTR onClick={() => handleClick("chefs", el)}>
          <ResultTableTD>CHEF: </ResultTableTD>
          <ResultTableTD>{el.ChefName}</ResultTableTD>
        </ResultTableTR>
      ))}
      {dishesResult.map((el) => (
        <ResultTableTR onClick={() => handleClick("dishes", el)}>
          <ResultTableTD>DISH: </ResultTableTD>
          <ResultTableTD>{el.Name}</ResultTableTD>
        </ResultTableTR>
      ))}
    </ResultTable>
  );
}
