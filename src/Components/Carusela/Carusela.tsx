import React from "react";
                                                                                                                                                 import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardPopular from "../Cards/CardPopular/CardPopular";
import CardSignatureDish from "../Cards/CardSignatureDish/CardSignatureDish";
import ChefOfTheWeekCard from "../Cards/ChefOfTheWeekCard/ChefOfTheWeekCard";                                                                                                                                              
import { Body } from "./Style";

interface Props {
  TheArray: any[];
  caruselaType: string;
}
export default function Carusela(props: Props) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
  };

  let isPopularRestaurants: boolean = false;
  let isSignatureDish: boolean = false;
  let isChefOfTheWeek: boolean = false;

  const chooseType = () => {
    switch (props.caruselaType) {
      case "PopularRestaurants":
        isPopularRestaurants = true;
        break;
      case "SignatureDish":
        isSignatureDish = true;
        break;
      case "ChefOfTheWeek":
        isChefOfTheWeek = true;
        break;
    }
  };

  chooseType();

  return (
    <Body>
      {isPopularRestaurants && (
        <Slider {...settings}>
          {props.TheArray.map((obj) => (
            <CardPopular theObj={obj} />
          ))}
        </Slider>
      )}

      {isSignatureDish && (
        <Slider {...settings}>
          {props.TheArray.map((obj) => (
            <CardSignatureDish theObj={obj} />
          ))}
        </Slider>
      )}
      {isChefOfTheWeek && (
        <Slider {...settings}>
          {props.TheArray.map((obj) => (
            <ChefOfTheWeekCard theObj={obj} />
          ))}
        </Slider>
      )}
    </Body>
  );
}
