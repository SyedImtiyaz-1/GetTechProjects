import { CgProfile } from "react-icons/cg";
import { IoHeart } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
import { FaCalculator } from "react-icons/fa6";
import { IoChatbubble } from "react-icons/io5";

const Header=()=>{

   const bag= useSelector(store=>store.bag);

  return(
    <>
         <header>
        <div className="logo_container">
            <Link to="/">
                <img className="myntra_home" src="images/logo_e_commerce.jpg" alt="Myntra Home"/></Link>
        </div>
        <nav className="nav_bar">
            <a href="#">Sanitary</a>
            <a href="#">Pregnancy</a>
            <a href="#">Baby Care</a>
            <a href="#">Medicine</a>
            <Link to="/calc"><FaCalculator /></Link>
            <a href="#"><IoChatbubble /></a>
        </nav>
        <div className="search_bar">
            <span className="material-symbols-outlined search_icon">search</span>
            <input className="search_input" placeholder="Search for products, brands and more"/>
        </div>
        <div className="action_bar">
            <div className="action_container">
           
                
            </div>

            <div className="action_container">
                <CgProfile />
                <span className="material-symbols-outlined action_icon space_icons">Profile</span>
                <IoHeart />
                <span className="action_name space_icons">
               Wishlist
                </span>
            </div>

            <Link className="action_container" to="/bag">
            <FaShoppingBag />
                <span className="action_name space_icons">Bag</span>
                <span className="bag-item-count space_icons">{bag.length}</span>
            </Link>
        </div>
    </header>
    </>
  )
}

export default Header