import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setShowSalModal } from "../../services/Slicer/showSalModalSlicer";
import {
  logoURL,
  EPICURE,
  searchIcon,
  LoginIcon,
  BagIcon,
} from "../../services/imagesURL";
import {
  Navbar,
  RightIcons,
  Links,
  IconsLinks,
  LeftIcons,
  Block,
  LogoDiv,
  EpicureDiv,
  LogoImage,
  EpicureImage,
} from "./Style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SearchModal from "../Modals/SearchModal/SearchModal";
import SignInModal from "../Modals/SignInModal/SignInModal";
import SalModal from "../Modals/SalModal/SalModal";
import { setShowSearchModal } from "../../services/Slicer/showSearchModalSlicer";

export default function Header() {
  const dispatch = useDispatch();
  const ShowSalModal = useSelector((state: any) => state.showSalModal.value);
  //const [ShowSearchModal, setShowSearchModal] = useState(false);
  const ShowSearchModal = useSelector(
    (state: any) => state.showSearchModal.value
  );
  const [ShowLoginModal, setShowLoginModal] = useState(false);
  //const [ShowSalModal, setShowSalModal] = useState(false);

  const showSearch = () => {
    dispatch(setShowSearchModal(true));
  };

  const showLoginPage = () => {
    setShowLoginModal(true);
  };
  const showSalPage = () => {
    // setShowSalModal(true);
    dispatch(setShowSalModal(true));
  };

  return (
    <div>
      <Navbar>
        <LeftIcons>
          <IconsLinks to="/home">
            <LogoImage src={logoURL} />
            {/* <LogoDiv srcImage={logoURL} /> */}
          </IconsLinks>
          <IconsLinks to="/home">
            <EpicureImage src={EPICURE} />
            {/* <EpicureDiv srcImage={EPICURE} /> */}
          </IconsLinks>

          <Links to="/restaurants"> Restaurants </Links>
          <Links to="/chefs"> Chefs </Links>
        </LeftIcons>

        <Block>
          <RightIcons>
            <IconsLinks to="#Search" onClick={showSearch}>
              <img src={searchIcon} alt="logo" />
            </IconsLinks>

            <IconsLinks to="#Login" onClick={showLoginPage}>
              <img src={LoginIcon} alt="logo" />
            </IconsLinks>

            <IconsLinks to="#Bag" onClick={showSalPage}>
              <img src={BagIcon} alt="logo" />
            </IconsLinks>
          </RightIcons>
        </Block>
      </Navbar>
      {/* {ShowSearchModal && (
        <SearchModal setShowSearchModal={setShowSearchModal} />
      )} */}
      {ShowSearchModal && <SearchModal />}
      {ShowLoginModal && <SignInModal setShowSignInModal={setShowLoginModal} />}
      {ShowSalModal && <SalModal />}
      {/* {ShowSalModal && <SalModal setShowSalModal={setShowSalModal} />} */}
    </div>
  );
}
