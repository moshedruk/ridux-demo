import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../css/navbar.css'

export default function Navbar() {
    return (
        <div className='main-nav'>            
            <NavLink to="/cr1" className={({ isActive }) => (isActive ? "activenav-link" : "nav-link")}>Home</NavLink>
            <NavLink to="/cr2" className={({ isActive }) => (isActive ? "activenav-link" : "nav-link")}>Home</NavLink>
            <NavLink to="/tra3" className={({ isActive }) => (isActive ? "activenav-link" : "nav-link")}>Home</NavLink>
        </div>
    )
}
