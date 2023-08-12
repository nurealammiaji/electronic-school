import { Link } from "react-router-dom";
import logo from '../../assets/icons/Logo.png';

const Header = () => {
    return (
        <nav className="flex items-center justify-between">
            <div className="w-80">
                <img src={logo} alt="" />
            </div>
            <div className="text-xl">
                <Link to="/books">Books</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/others">Others</Link>
            </div>
        </nav>
    );
};

export default Header;