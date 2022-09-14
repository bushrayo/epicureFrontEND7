import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setShowSearchModal } from "../../../services/Slicer/showSearchModalSlicer";
import {
  Body,
  Header,
  Button,
  Address,
  SearchDiv,
  Input,
  Result,
} from "./Style";

import AutoCompleteSearch from "../../../helpers/AutoCompleteSearch/AutoCompleteSearch";

export default function SearchModal() {
  const [searchInput, setSearchInput] = useState("");
  const [showResult, setShowResult] = useState(false);
  const dispatch = useDispatch();

  const hideSearch = () => {
    dispatch(setShowSearchModal(false));
  };

  function handleChange(e: {
    target: { value: React.SetStateAction<string> };
  }) {
    setShowResult(true);
    setSearchInput(e.target.value);
  }

  return (
    <Body>
      <Header>
        <Button onClick={hideSearch}> X </Button>
        <Address>Search</Address>
      </Header>
      <SearchDiv>
        <Input
          type="text"
          name="search"
          onChange={handleChange}
          value={searchInput}
        />

        {showResult && (
          <Result>
            <AutoCompleteSearch searchInputProps={searchInput.toLowerCase()} />
          </Result>
        )}
      </SearchDiv>
    </Body>
  );
}
