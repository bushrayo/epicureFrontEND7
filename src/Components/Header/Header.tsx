import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setShowSalModal } from "../../services/Slicer/showSalModalSlicer";
import { setShowSearchModal } from "../../services/Slicer/showSearchModalSlicer";
import {
  logoURL,
  searchIcon,
  LoginIcon,
  BagIcon,
} from "../../services/imagesURL";
import {
  Navbar,
  Dropdown,
  DropdownContent,
  Icons,
  Button,
  DropdownLinks,
  IconsLinks,
  LogoDiv,
  Block,
  Line,
} from "./Style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SearchModal from "../Modals/SearchModal/SearchModal";
import SignInModal from "../Modals/SignInModal/SignInModal";
import SalModal from "../Modals/SalModal/SalModal";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ShowSalModal = useSelector((state: any) => state.showSalModal.value);
  const ShowSearchModal = useSelector(
    (state: any) => state.showSearchModal.value
  );
  const [hideDropDown, setHideDropDown] = useState(false);
  //const [ShowSearchModal, setShowSearchModal] = useState(false);
  const [ShowLoginModal, setShowLoginModal] = useState(false);
  //const [ShowSalModal, setShowSalModal] = useState(false);

  const showSearch = () => {
    //setShowSearchModal(true);
    dispatch(setShowSearchModal(true));
  };

  const showLoginPage = () => {
    setShowLoginModal(true);
  };
  const showSalPage = () => {
    dispatch(setShowSalModal(true));
    //setShowSalModal(true);
  };

  const showHideDropDown = () => {
    if (hideDropDown) setHideDropDown(false);
    else setHideDropDown(true);
  };

  return (
    <div>
      <Navbar>
        <Dropdown>
          <FontAwesomeIcon icon={faBars} onClick={showHideDropDown} />
          <DropdownContent Display={hideDropDown}>
            <Button onClick={showHideDropDown}> X </Button>

            <DropdownLinks to="/restaurants" onClick={showHideDropDown}>
              Restaurants
            </DropdownLinks>
            <DropdownLinks to="/chefs" onClick={showHideDropDown}>
              {" "}
              Chefs{" "}
            </DropdownLinks>
            <div>
              <Line />
            </div>

            <DropdownLinks to="/ContactUs" onClick={showHideDropDown}>
              {" "}
              Contact Us{" "}
            </DropdownLinks>
            <DropdownLinks to="/termOfUse" onClick={showHideDropDown}>
              {" "}
              Term of use{" "}
            </DropdownLinks>
            <DropdownLinks to="termOfUse" onClick={showHideDropDown}>
              {" "}
              Privacy policy{" "}
            </DropdownLinks>
          </DropdownContent>
        </Dropdown>

        <LogoDiv>
          <IconsLinks to="/home">
            <img src={logoURL} alt="logo" />
          </IconsLinks>
        </LogoDiv>

        <Block>
          <Icons>
            <IconsLinks to="#Search" onClick={showSearch}>
              <img src={searchIcon} alt="logo" />
            </IconsLinks>

            <IconsLinks to="#Login" onClick={showLoginPage}>
              <img src={LoginIcon} alt="logo" />
            </IconsLinks>

            <IconsLinks to="#Bag" onClick={showSalPage}>
              <img src={BagIcon} alt="logo" />
            </IconsLinks>
          </Icons>
        </Block>
      </Navbar>
      {/* {ShowSearchModal && (
        <SearchModal setShowSearchModal={setShowSearchModal} />
      )} */}
      {ShowSearchModal && <SearchModal />}
      {ShowLoginModal && <SignInModal setShowSignInModal={setShowLoginModal} />}
      {/* {ShowSalModal && <SalModal setShowSalModal={setShowSalModal} />} */}
      {ShowSalModal && <SalModal />}
    </div>
  );
}
