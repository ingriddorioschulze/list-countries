import React from 'react'
import Header from './Header'
import Homepage from './Homepage'

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Header />
      <Homepage />
    </div>
  )
}

export default App
