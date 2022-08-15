import React from "react";

type CountryCardProperties = {
  countryName: string;
  countryPopulation: number;
  countryRegion: string;
  countryCapital: string;
  countryFlag: string;
};

const CountryCard: React.FC<CountryCardProperties> = (props:CountryCardProperties): JSX.Element => {
  return (
    <div>
      <img alt={`${props.countryName}'s Flag`} src={props.countryFlag} />
      <p>{props.countryName}</p>
      <p>{props.countryPopulation}</p>
      <p>{props.countryRegion}</p>
      <p>{props.countryCapital}</p>
    </div>
  );
};

export default CountryCard;
