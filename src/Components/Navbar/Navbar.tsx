import navbarCSS from "./../Navbar/Navbar.module.css"
import {useRef} from "react";
function Navbar() {
  const menu = useRef();
  const MenuHandler =()=>{
    menu.current.classList.toggle(navbarCSS.activeMenu)
  }
  return (
    <div className={navbarCSS.Nav_wrapper}>
      <div className={navbarCSS.logo}>
        <a href="#">Travelia <span>.</span></a>
      </div>
      <ul ref={menu}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Trips</a></li>
        <li><a href="#">Destinations</a></li>
        <li><a href="#">Searches</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Popular Destinations</a></li>
      </ul>
      <div className={navbarCSS.nav_btns}>
        <div className={navbarCSS.search_wrapper}>
          <i className="ri-search-line"/>
          <input type="text" placeholder="Search Places"/>
        </div>
        <div className={navbarCSS.CallBtn}>
          <i className="ri-phone-line"/>
          <p>+2 1231 12 2234 <small>Call Your Travel Agent</small> </p>
        </div>
        <i className="ri-menu-2-line" onClick={MenuHandler} id={navbarCSS.bars}/>
      </div>
    </div>
  );
}

export default Navbar