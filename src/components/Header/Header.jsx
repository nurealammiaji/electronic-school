import { Link } from "react-router-dom";
import logo from '../../assets/icons/Logo.png';

const Header = () => {
    return (
        <nav className="flex items-center justify-between bg-green-100">
            <div className="my-2 w-52">
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            <div className="text-xl my-2 [&>*]:py-2 [&>*]:px-4 [&>*:hover]:bg-green-500 [&>*:hover]:rounded-3xl">
                <Link to="/books">Books</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/others">Others</Link>
                <Link to="/blog">Blog</Link>
                <Link className="text-white bg-green-500 rounded-3xl" to="/signin">Sign in</Link>
            </div>
        </nav>
    );
};

export default Header;