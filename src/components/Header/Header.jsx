import { Link } from "react-router-dom";
import logo from '../../assets/icons/Logo.png';

const Header = () => {
    return (
        <nav className="flex items-center justify-between bg-green-100">
            <div className="my-2 w-52">
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            <div className="text-xl my-2 [&>*]:p-4 [&>*:hover]:bg-green-500">
                <Link to="/books">Books</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/others">Others</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/signin">Sign in</Link>
            </div>
        </nav>
    );
};

export default Header;