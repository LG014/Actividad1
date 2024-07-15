import React, { useState }from "react"
import { Link, NavLink } from "react-router-dom"
import "./Navbar.css"

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav>
        <Link to="/" className='title'>
        GamerZone
        </Link>
        <div className="menu" onClick={() =>{
            setMenuOpen(!menuOpen)
        }}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
            <li>
                <NavLink to="/games">Games</NavLink>
            </li>
            <li>
                <NavLink to="/history">History</NavLink>
            </li>
            <li>
                <NavLink to="/cart">Cart</NavLink>
            </li>
        </ul>
    </nav>
  )
}
