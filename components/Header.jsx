import React from 'react';
import Image from '../assets/WhatsApp Image 2021-02-08 at 09.53.08.jpeg';
import {Link} from 'react-router-dom';
import './Header.css';

function Header() {
    return (
   
<div className="MyHeader"> 
 <img className='image' src={Image} />
 <Link className='textHeader1' to="/">My Projects</Link>
 <Link className='textHeader2' to="/about">About me </Link>
</div >

  )
}


export default Header;
