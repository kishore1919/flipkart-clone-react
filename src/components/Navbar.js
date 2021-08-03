import { FaShoppingCart, FaSearch, FaUserCircle } from 'react-icons/fa';
import { TiPlus } from 'react-icons/ti';
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="header">
            <div className="logo-texts">
                <Link to="/" className="link">
                    <span className="flipkart">
                        <i>
                            Flipkart
                        </i>
                    </span>
                </Link>
                
                <div className="plus">
                    <i>Explore <Link to="/plus" className="plus-link"><span>Plus<TiPlus className="plus-icon"/></span></Link></i>
                </div>
            </div>
            <div className="form">
                <div className="user-form">
                    <form>
                        <div className="formGroup">
                            <div className="input-container">
                                <input type="text" placeholder="Search for products, brands and more" name="search"></input>
                            </div>
                            <button type= "submit"><FaSearch/></button>
                        </div>
                    </form>
                </div>
            </div>
            

            <div className="dropdownBtn">
                <button><FaUserCircle/></button>
                {/* <button>More <RiArrowDropDownLine /></button> */}
                <Link to = "/cart"><button><FaShoppingCart /> Cart</button></Link>
                
            </div>
        </div>
    )
}

export default Navbar
