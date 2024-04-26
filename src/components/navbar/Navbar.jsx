import {RiMenu3Line, RiCloseLin } from 'react-icons/ri'
import './navbar.css';
import logo from '../../assets/logo.svg'

const Navbar = () => {
    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="gpt3__navbar-links_container">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#wgpt3">what is GPT</a></li>
                        <li><a href="#possibility">Open ai</a></li>
                        <li><a href="#features">case studies</a></li>
                        <li><a href="#blog">library</a></li>
                    </ul>
                </div>
                <div className="gpt3-sign">
                    <a href="#sign-in">Sign In</a>
                    <button>sign up</button>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar; 