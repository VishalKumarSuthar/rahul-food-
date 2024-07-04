import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("Menu")
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const {getTotalCartAmount} = useContext(StoreContext);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className='navbar'>
            <img src={assets.logo} alt="Logo" className="logo" />
            <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
                <Link to='/' onClick={() => {setMenu("Home"); setIsMenuOpen(false)}} className={menu === "Home" ? "active" : ""}>Home</Link>
                <a href='#explore-menu' onClick={() => {setMenu("Menu"); setIsMenuOpen(false)}} className={menu === "Menu" ? "active" : ""}>Menu</a>
                <a href='#app-download' onClick={() => {setMenu("Mobile-App"); setIsMenuOpen(false)}} className={menu === "Mobile-App" ? "active" : ""}>Mobile-App</a>
                <a href='#footer' onClick={() => {setMenu("Contact-Us"); setIsMenuOpen(false)}} className={menu === "Contact-Us" ? "active" : ""}>Contact-Us</a>
            </div>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="Search Icon" />
                <div className="navbar-search-icon">
                    <Link to ='/cart'><img src={assets.basket_icon} alt="" /></Link>
                    <div className={getTotalCartAmount()===0?"":"dot"}></div>
                </div>
                <button onClick={()=>setShowLogin(true)}>Sign In</button>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Navbar