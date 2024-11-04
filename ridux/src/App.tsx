import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BankContext from './context/bank'
import Ibank from './interface/bank'
import accountContext from './context/account'
import Iaccount from './interface/account'
import Home from './componnts/home'

function App() { 
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
    <div>
      <BankContext.Provider value={bank}>
        <accountContext.Provider value={account}>
        <div className="app">
          <h1>Welcome to Ridux!</h1>
          <Home/>          
        </div>
        <div className="logos">
          <img src={reactLogo} alt="React logo" />
          <img src={viteLogo} alt="Vite logo" />
        </div>
        </accountContext.Provider>
      </BankContext.Provider>
    </div>
  )
}

export default App
