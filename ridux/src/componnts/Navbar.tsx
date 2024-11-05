import React from 'react'
import {NavLink } from 'react-router-dom'
import '../css/navbar.css'

export default function Navbar() {
    return (
        <div className='main-nav'>  
        <div className='router'>
            <NavLink to="/list" className={({ isActive }) => (isActive ? "activenav-link" : "nav-link")}>List</NavLink>
        </div>  
        <div className='router'>
            <NavLink to="/add" className={({ isActive }) => (isActive ? "activenav-link" : "nav-link")}>add</NavLink>
        </div>
        <div className='router'>
            <NavLink to="/tra3" className={({ isActive }) => (isActive ? "activenav-link" : "nav-link")}>Home</NavLink>
        </div>        
        </div>
    )
}
