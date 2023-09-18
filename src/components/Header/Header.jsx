import React from 'react'
import {Link} from  "react-router-dom"
import "../Home/Home.scss"
import Logo from "../../logo.png"
import { FiSearch} from "react-icons/fi"


const Header = () => {
  return (
    <div className='Header' >
        <div>
        <img src={Logo} alt="" />
        </div>
        <nav>
            <Link to="/" >TVShows</Link>
            <Link to="/" >Movies</Link>
            <Link to="/" >ReentlyAdded</Link>
            <Link to="/" >MyList</Link>
        </nav>

        <FiSearch />

    </div>
  )
}

export default Header