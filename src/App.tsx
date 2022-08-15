import React from 'react'

import Homepage from './Homepage'
import Header from './Header'

const App: React.FC = (): JSX.Element => {
  return (
    <div className="App">
      <Header />
      <Homepage/>
    </div>
  )
}

export default App
