import React, { useContext } from 'react'
import BankContext from '../context/bank'
import Ibank from '../interface/bank'
import Iaccount from '../interface/account'
import accountContext from '../context/account'

export default function Home() {
    const bank:Ibank = useContext(BankContext)
    const account:Iaccount = useContext(accountContext)
  return (
    <div>
      <h1>balance {account.balance}</h1>
      <h2>balance {bank.traesher}</h2>
    </div>
  )
}
