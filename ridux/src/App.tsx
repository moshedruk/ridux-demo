import { useState } from 'react'

import './App.css'
import './css/app.css'

import { Route, Routes } from 'react-router-dom'

import PagesRouter from './componnts/PagesRouter'
import Iunits from './interface/units'
import DeploymentContext from './context/DeploymentContext'

import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {
  const [units, setUnits] = useState<Iunits>({
    Golani: 'Idle',
    Paratroopers: 'Idle',
    Givati: 'Idle'
  });

  return (

    <div className="main-app">
      <DeploymentContext.Provider value={{ units, setUnits }}>
        <Provider store={store}>
          <Routes>
            <Route path="/*" element={<PagesRouter />} />
          </Routes>
        </Provider>
      </DeploymentContext.Provider>
    </div>
  )
}

export default App
