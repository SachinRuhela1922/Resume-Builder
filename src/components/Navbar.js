import {Link} from 'react-router-dom';
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
