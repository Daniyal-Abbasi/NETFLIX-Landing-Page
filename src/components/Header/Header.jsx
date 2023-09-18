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
            <Link to="/TVShows" >TVShows</Link>
            <Link to="/Movies" >Movies</Link>
            <Link to="/ReentlyAdded" >ReentlyAdded</Link>
            <Link to="/MyList" >MyList</Link>
        </nav>

        <FiSearch />

    </div>
  )
}

export default Header