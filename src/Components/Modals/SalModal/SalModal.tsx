import React, { useState } from "react";
import { bagImage } from "../../../services/imagesURL";
import {
  Body,
  BagDiv,
  OrderBody,
  BagImage,
  BagDetailsDiv,
  BagDetailsTitle,
  Total,
  CHECKOUT,
  Address,
  BottomDiv,
  EmptyDiv,
} from "./Style";
import { useSelector, useDispatch } from "react-redux";
import { setShowSalModal } from "../../../services/Slicer/showSalModalSlicer";
import OrderCard from "../../Cards/OrderCard/OrderCard";

// interface Props {
//   setShowSalModal: (params: any) => any;
// }
//export default function SalModal({ setShowSalModal }: Props) {
export default function SalModal() {
  const dispatch = useDispatch();
  const OrderBag = useSelector((state: any) => state.orderBag.value);
  const isEmptyOrder: boolean = OrderBag.length === 0 ? true : false;

  const totalPriceForUser: number = OrderBag.reduce(
    (
      sum: number,
      curr: {
        amount: number;
        price: number;
      }
    ) => {
      return curr.price * curr.amount + sum;
    },
    0
  );

  const hideSalModal = () => {
    // setShowSalModal(false);// usestate
    dispatch(setShowSalModal(false));
  };

  const checkOut = () => {
    alert("pay");
  };

  const totalText: string = "Total - " + totalPriceForUser;

  return (
    <Body onClick={hideSalModal}>
      {isEmptyOrder ? (
        <BagDiv>
          <BagImage src={bagImage} />
          <BagDetailsDiv>
            <BagDetailsTitle> Your bag is empty</BagDetailsTitle>
          </BagDetailsDiv>
        </BagDiv>
      ) : (
        <OrderBody>
          <Address>My order</Address>
          {OrderBag.map((obj: object) => (
            <OrderCard theObj={obj} />
          ))}

          <EmptyDiv />
          <Total> {totalText}</Total>
          <CHECKOUT onClick={checkOut}>CHECKOUT</CHECKOUT>
          <EmptyDiv />
        </OrderBody>
      )}
    </Body>
  );
}
