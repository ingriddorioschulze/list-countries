import React, { useState, useEffect } from "react";
import CountryCard from "./CountryCard";
import FilterCountries from "./FilterCountries";
import SearchCountries from "./SearchCountries";
import getAllCountries, { CountriesData } from "./utils";

const Homepage: React.FC = (): JSX.Element => {
  const [countries, setCountries] = useState<CountriesData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchCountry, setSearchedCountry] = useState("");
  const [filterRegion, setFilteredRegion] = useState("")

  useEffect(() => {
    setLoading(true);
    setCountries([]);
    getAllCountries(searchCountry, filterRegion).then((countries) => {
      setCountries(countries);
      setLoading(false);
    });
  }, [searchCountry, filterRegion]);


  return (
    <div>
      <FilterCountries
      filterRegion={filterRegion} 
      setFilteredRegion={setFilteredRegion}/>
      <SearchCountries searchCountry={searchCountry} setSearchedCountry={setSearchedCountry} />
      {countries.map((country, index) => (
        <CountryCard
          key={index}
          countryName={country.name}
          countryPopulation={country.population}
          countryRegion={country.region}
          countryCapital={country.capital}
          countryFlag={country.flag}
        />
      ))}
    </div>
  );
};

export default Homepage;
