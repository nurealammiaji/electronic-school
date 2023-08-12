import { Link } from "react-router-dom";
import logo from '../../assets/icons/Logo.png';

const Header = () => {
    return (
        <nav>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <Link to="/books">Books</Link>
            </div>
        </nav>
    );
};

export default Header;