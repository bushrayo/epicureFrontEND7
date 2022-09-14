import React, { useState } from "react";
import {
  Body,
  Header,
  Button,
  ImageDiv,
  Details,
  TextDiv,
  Text,
  TextDivDescription,
  SText,
  ChooseSide,
  Changes,
  Quantity,
  AmountNumber,
  AmountButton,
  ChooseP,
  Form,
  AddToBagButton,
} from "./Style";
import { useSelector, useDispatch } from "react-redux";
import { setShowSalModal } from "../../services/Slicer/showSalModalSlicer";
import { setOrderBag } from "../../services/Slicer/orderBagSlicer";
import { useNavigate } from "react-router-dom";

export default function DishPage() {
  const theDishObject = useSelector((state: any) => state.clickedDish.value);
  const theOrderBagArray = useSelector((state: any) => state.orderBag.value);
  const [amountCounter, setAmountCounter] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const exitDishPage = () => {
    navigate("/restaurantPage");
  };

  const Q1: string = "White bread";
  const Q2: string = "Sticky rice";
  const Change1: string = "Whithout peanuts";
  const Change2: string = "Sticky Less spicy";

  const [chooseAside, setChooseAside] = useState("");
  const [change1, setChange1] = useState(false);
  const [change2, setChange2] = useState(false);
  const [changeQ1, setChangeQ1] = useState("");
  const [changeQ2, setChangeQ2] = useState("");

  const handleChangeSide = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setChooseAside(e.target.value);
  };
  const handleClickChanges = (change: string) => {
    if (change === "change1") {
      setChange1(!change1);
      change1 ? setChangeQ1(Change1) : setChangeQ1("");
      // console.log(change1);
      // console.log(changeQ1);
    } else {
      setChange2(!change2);
      change2 ? setChangeQ2(Change2) : setChangeQ2("");
      // console.log(change2);
      // console.log(changeQ2);
    }
  };

  const addAmount = () => {
    setAmountCounter(amountCounter + 1);
  };
  const reduceAmount = () => {
    if (amountCounter !== 0) {
      setAmountCounter(amountCounter - 1);
    }
  };

  const order: object[] = [];
  const addToBag = () => {
    let thisOrder: object = {
      image: theDishObject.DisheUrlImage,
      name: theDishObject.Name,
      amount: amountCounter,
      price: theDishObject.Price,
      chooseSide: chooseAside,
      // changes: [changeQ1, changeQ2].filter((el) => el !== ""),
      changes: [changeQ1, changeQ2],
    };

    order.push(thisOrder);
    if (theOrderBagArray.length !== 0) {
      theOrderBagArray.map((el: object) => {
        order.push(el);
      });
    }
    dispatch(setOrderBag(order));
    dispatch(setShowSalModal(true));
    navigate("/restaurantPage");
  };

  return (
    <Body>
      <Header>
        <Button onClick={exitDishPage}> X </Button>
      </Header>
      <ImageDiv srcImage={theDishObject.DisheUrlImage}></ImageDiv>
      <Details>
        <TextDiv>
          <Text>{theDishObject.Name}</Text>
        </TextDiv>

        <TextDivDescription>
          <SText>{theDishObject.DishDescription}</SText>
        </TextDivDescription>
      </Details>

      <Form onSubmit={addToBag}>
        <ChooseSide>
          <SText>Choose a side</SText>
          <input
            type="radio"
            id="1"
            name="ChooseSide"
            value={Q1}
            onChange={handleChangeSide}
            required
          />
            <label htmlFor="1"> {Q1}</label> <br />
          <input
            type="radio"
            id="2"
            name="ChooseSide"
            value={Q2}
            onChange={handleChangeSide}
          />
            <label htmlFor="2">{Q2}</label>
          <br />
        </ChooseSide>

        <Changes>
          <SText>Changes</SText>
          <input
            type="checkbox"
            id="change1"
            name="change1"
            value={Change1}
            onClick={() => handleClickChanges("change1")}
          />
          <label htmlFor="change1"> {Change1}</label>
          <br />
          <input
            type="checkbox"
            id="change2"
            name="change2"
            value={Change2}
            onClick={() => handleClickChanges("change2")}
          />
          <label htmlFor="change2"> {Change2}</label>
          <br />
        </Changes>
        <ChooseP>Quantity</ChooseP>
        <Quantity>
          <AmountButton onClick={reduceAmount}>-</AmountButton>
          <AmountNumber>{amountCounter}</AmountNumber>
          <AmountButton onClick={addAmount}>+</AmountButton>
        </Quantity>

        {/* <AddToBagButton type="submit" value="ADD TO BAG">
          ADD TO BAG
        </AddToBagButton> */}
        <AddToBagButton onClick={addToBag}>ADD TO BAG</AddToBagButton>
      </Form>
    </Body>
  );
}
