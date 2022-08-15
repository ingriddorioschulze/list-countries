import React from "react";

type SearchProperties = {
  searchCountry: string;
  setSearchedCountry: (searchCountry: string) => unknown;
};

const SearchCountries: React.FC<SearchProperties> = (
  props: SearchProperties
): JSX.Element => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setSearchedCountry(event.currentTarget.value);
  };

  return (
    <div>
      <input
        placeholder="search countries"
        type="search"
        id="search"
        name="search"
        value={props.searchCountry}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchCountries;
