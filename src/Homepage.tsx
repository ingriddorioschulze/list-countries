// cards on homepage with country flag, name, population, region and capital
import React, { useState, useEffect } from "react";
import CountryCard from "./CountryCard";
import FilterCountries from "./FilterCountries";
import SearchCountries from "./SearchCountries";
import getAllCountries, { CountriesData } from "./utils";

const Homepage: React.FC = (): JSX.Element => {
  const [countries, setCountries] = useState<CountriesData[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedOption, setSelectedOption] = useState("")

  useEffect(() => {
    setLoading(true);
    setCountries([]);
    getAllCountries(search).then((countries) => {
      setCountries(countries);
      setLoading(false);
    });
  }, [search]);


  return (
    <div>
      <FilterCountries 
      selectedOption={selectedOption} 
      setSelectedOption={setSelectedOption}/>
      <SearchCountries search={search} setSearch={setSearch} />
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
