import React from "react";


type CountryCardDetailedProperties = {
  countryName: string;
  countryPopulation: number;
  countryRegion: string;
  countryCapital: string;
  countryFlag: string;
  countryNativeName: string;
  countrySubRegion: string;
  countryTopLevelDomain: Array<string>;
  countryCurrencies: Array<{name: string}>;
  countryLanguages: Array<{name: string}>;
  countryBorders: Array<string>;

};

const CountryCardDetailed: React.FC<CountryCardDetailedProperties> = (
  props: CountryCardDetailedProperties
): JSX.Element => {
  return (
    <div>
      <a href="/">go back</a>
      <img alt={`${props.countryName}'s Flag`} src={props.countryFlag} />
      <p>{props.countryName}</p>
      <p>{props.countryNativeName}</p>
      <p>{props.countryPopulation}</p>
      <p>{props.countryRegion}</p>
      <p>{props.countrySubRegion}</p>
      <p>{props.countryCapital}</p>
      <p>{props.countryTopLevelDomain}</p>
      <p>{props.countryCurrencies}</p>
      <p>{props.countryLanguages}</p>
      <button>{props.countryBorders}</button>
    </div>
  );
};

export default CountryCardDetailed;
