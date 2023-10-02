import { useState } from 'react'
import {Link,NavLink} from 'react-router-dom'

import './navbar.css'
import Logo from '../assets/images/logo.png'
import {links} from '../data'
import { FaBars } from 'react-icons/fa';
import {MdOutlineClose} from 'react-icons/md';


const Navbar=() => {

    const [isNavShowing,setIsNavShowing] =useState(false)
    return (
    <nav>

        <div className="container nav__container">

            {/* //creating  a container and adding the logo image 
            linking to the pages
            and navigation buttons */}
            <Link  to="/" className='logo' onClick={()=>setIsNavShowing(false)}>
                <img src={Logo} alt="new logo"/>
            </Link>
            <ul className={`nav_links ${isNavShowing?  'show_nav' :'hide_nav'}`}>
                {
                    links.map(({name,path},index)=> {
                        return (
                            <li>
                                <NavLink to ={path} className={({isActive}) => isActive? 'active-nav' : ''} onClick={()=>setIsNavShowing(prev=>!prev)}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button className="nav_toggle-btn" onClick={()=>setIsNavShowing(prev=>!prev)}>
                {
                    isNavShowing? <MdOutlineClose/>: <FaBars/>
                }

            </button>
            
        </div>

    </nav>)
}

export default Navbar