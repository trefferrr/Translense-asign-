import Logo from "../Assests/logo.webp";
import Cookie from "../Assests/cookie.webp";

const Navbar = () => {
    return <div id="navbar">
        <img src={Cookie} alt="" id="cookie" />
        <img src={Logo} alt="" id="logo" />
        <div className="overlay">
            <h1>Partner With Us</h1>
            <p>Be our partner in just few steps and start Increasing your reach by gaining new customers.</p>
        </div>
    </div>
}
export default Navbar;