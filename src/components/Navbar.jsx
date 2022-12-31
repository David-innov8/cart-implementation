import React from 'react'
import '../styles/navbar.css'
const Navbar = () => {
  return (
   <nav>
    <div className='nav_box'>
        <span>
            my shopping cart
        </span>
        <div className="cart">
            <i className='fas fa-cart-plus'/>
        </div>
    </div>
   </nav>
  )
}

export default Navbar
