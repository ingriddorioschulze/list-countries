// cards on homepage with country flag, name, population, region and capital 
import React, { useState, useEffect } from 'react'
import getAllCountries, { CountriesData } from './utils'

const CountriesCard: React.FC = (): JSX.Element => {
  const [countries, setCountries] = useState<CountriesData[]>([])
  // const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAllCountries().then((countries) => {
      setCountries(countries)
      console.log(countries)
    })
  }, [])

  return (
    <div>
      <div>countries card</div>
      {countries.map((country, index) => (
        <div key={index}>
          <img alt={country.name} src={country.flag}/>
          <p>COUNTRY NAME: {country.name}</p>
          <p>COUNTRY POPULATION: {country.population}</p>
          <p>COUNTRY REGION: {country.region}</p>
          <p>COUNTRY CAPITAL: {country.capital}</p>
        </div>
      ))} 
      </div>
  )
}

export default CountriesCard
