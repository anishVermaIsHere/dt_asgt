import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import DeepThought from './app/DeepThought'

const App = () => {
  return (
    <Router>
      <DeepThought />
    </Router>
  )
}

export default App