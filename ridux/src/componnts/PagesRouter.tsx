import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import '../css/PagesRouter.css'
import UnitList from './UnitList'
import MissionCompleted from './MissionCompleted'

export default function PagesRouter() {
  return (
    <div className="main-page">
      <div className="left">
        <Navbar />
      </div>
      <div className="right">
        <Routes>
          <Route path="/cr1" element={<UnitList/>} />
          <Route path="/cr2" element={<MissionCompleted/>} />
          <Route path="/tra3" element={<h1>33333</h1>} />
        </Routes>
      </div>
    </div>
  )
}
