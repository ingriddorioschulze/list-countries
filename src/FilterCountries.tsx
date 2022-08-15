import React from "react";

type FilterProperties = {
  filterRegion: string;
  setFilteredRegion: (filterRegion: string) => unknown;
};

const FilterCountries: React.FC<FilterProperties> = (
  props: FilterProperties
): JSX.Element => {
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.setFilteredRegion(event.target.value);
  };
  return (
    <div>
      <select value={props.filterRegion} onChange={handleFilterChange}>
        <option value="Filter by Region">Sort by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default FilterCountries;
