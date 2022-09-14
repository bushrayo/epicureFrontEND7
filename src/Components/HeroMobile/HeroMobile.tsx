import React, { useState } from "react";
import { Body, SearchBlock, TextHeader, Input, Result } from "./Style";
import { heroPicture, searchIcon } from "../../services/imagesURL";
import AutoCompleteSearch from "../../helpers/AutoCompleteSearch/AutoCompleteSearch";

export default function HeroMobile() {
  const [inputSearchValue, setInputSearcValue] = useState("");
  const [showResult, setShowResult] = useState(false);
  const address: string =
    "Epicure works with the top chef restaurants in Tel Aviv";
  const paragraphInInput: string = "     Search for restaurant cuisine, chef";

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearcValue(e.target.value);
    setShowResult(true);
  };

  return (
    <Body srcImage={heroPicture}>
      <SearchBlock>
        <TextHeader>{address}</TextHeader>
        <Input
          searchIcon={searchIcon}
          placeholder={paragraphInInput}
          type="text"
          value={inputSearchValue}
          name="search"
          onChange={onChangeHandler}
        />
        {showResult && (
          <Result>
            <AutoCompleteSearch
              searchInputProps={inputSearchValue.toLowerCase()}
            />
          </Result>
        )}
      </SearchBlock>
    </Body>
  );
}
