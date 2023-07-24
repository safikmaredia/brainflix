import "./Header.scss";
import logo from "../../Assets/Logo/BrainFlix-logo.svg";
import search from "../../Assets/Icons/search.svg";
import avatar from "../../Assets/Images/Mohan-muruge.jpg";
import upload from "../../Assets/Icons/upload.svg"
import { Link } from "react-router-dom";


function Header(){

    return(
        <header>
        <nav className="menu">
            <Link to='/' href=""><img className="menu__logo" src={logo} alt="Brainflix logo"/></Link>
            <div className="container">
            <div className="menu__bar">
            <input className="menu__bar-input" id="search" type="search" name="search" placeholder="Search"/>
            <img className="menu__bar--search-icon" src={search} alt="search"/>
            <img className="menu__bar--avatar" src={avatar} alt="avatar"/>
            </div>
            <div className="menu__button--container">
            <Link to="/upload"><button className="menu__button">UPLOAD</button></Link>
            <img className="menu__button-image" src={upload} alt="upload"/>
            </div>
            </div>
        </nav>
        </header>
    )
}

export default Header