import React from 'react'

import CountriesCard from './CountriesCard'
import Header from './Header'

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Header />
      <CountriesCard/>
    </div>
  )
}

export default App
