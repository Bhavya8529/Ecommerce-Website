import React from 'react';
import'./style.css';
/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <header className="header">
        <nav className="headerMenu">
            <a href="">Rings</a>
            <a href="">earings</a>
            <a href="">Bangles And Braceletes</a>
            <a href="">Solitaires</a>
            <a href="">other Jewellery</a>
            <a href="">Giftings</a>
        </nav>
        <div >
            <input className="searchDesign" type="text" placeholder="Search" />
        </div>
    </header>
   )

 }

export default Header;