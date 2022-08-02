import React from 'react'
import CountriesCard from './CountriesCard'
import Search from './Search'

const Homepage: React.FC = (): JSX.Element => {

  return (
    <div>
      <Search/>
      <CountriesCard/>
    </div>
  )
}

export default Homepage
