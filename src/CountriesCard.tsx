// cards on homepage with country flag, name, population, region and capital 
import React, { useState, useEffect } from 'react'
import getAllCountries, { CountriesData } from './utils'

const CountriesCard: React.FC = (): JSX.Element => {
  const [countries, setCountries] = useState<CountriesData[]>([])
  const [loading, setLoading] = useState(true)
  const [searched, setSearched] = useState("")



  useEffect(() => {
    setLoading(true)
    setCountries([])
    getAllCountries().then((countries) => {
      setCountries(countries)
      setLoading(false)
    })
  }, [])

  return (
    <div>
      <input placeholder="search countries" type="search" id="search" name="search" onChange={event => setSearched(event.target.value) }/>
      {countries.filter(country => {
        if (searched === '') {
          return country
        } else if (country.name.toLowerCase().includes(searched.toLowerCase())) {
          return country
        }
      })
      .map((country, index) => (
        <div key={index}>
          <img alt={country.name} src={country.flag}/>
          <p>{country.name}</p>
          <p>{country.population}</p>
          <p>{country.region}</p>
          <p>{country.capital}</p>
        </div>
      ))} 
      </div>
  )
}

export default CountriesCard
