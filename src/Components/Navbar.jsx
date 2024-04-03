import './Style.css';
import logo from './Img/Logo.png'
import Nav from './Nav';


const Navbar = () => {
    return (
        <header>
            <div className="nav-area">
                <div className="logo-container">
                    <img src={logo} className="logo" />
                </div>
               <Nav/>
                <div className="get-started-container">
                    <button className="get-started-button">Get Started</button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
