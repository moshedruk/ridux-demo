import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './css/app.css'
import BankContext from './context/bank'
import Ibank from './interface/bank'
import accountContext from './context/account'
import Iaccount from './interface/account'
import Home from './componnts/home'
import { Route, Routes } from 'react-router-dom'
import Nav from './componnts/Navbar'
import PagesRouter from './componnts/PagesRouter'
import Iunits from './interface/units'
import DeploymentContext from './context/DeploymentContext'
import UnitList from './componnts/UnitList'

function App() { 
  const [units, setUnits] = useState<Iunits>({ 
    units: {
      Golani: 'Idle',
      Paratroopers: 'Idle',
      Givati: 'Idle'
    }
  
    });    
    
  const [account, setAccount] = useState<Iaccount>({
    id: "1",    
    balance: 110,
    loans: [],
    transction:[]
  })
  const [bank, setBank] = useState<Ibank>({
    traesher: 10000,
    users: [{
      name: "John",
      account_id: "12345"
    },
    {
      name: "Jo",
      account_id: "54321"
    }]
  })
  return (
    
      <div className="main-app">
      <DeploymentContext.Provider value = {{units,setUnits}}>
        <accountContext.Provider value={account}>
          <Routes>
            
          <Route path="/*" element={<PagesRouter/>} />          
          </Routes>
        </accountContext.Provider>
        </DeploymentContext.Provider>
      
    </div>
  )
}

export default App
