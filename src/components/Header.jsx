import { Link } from "react-router-dom";

const Header = (props) => {
    const studentBorder = props.studentBorder;
    const favBorder = props.favBorder;
    return (
        <header className="flex justify-between sm:px-16 bg-red-400 p-5 text-white font-medium text-xl sm:text-2xl mb-5">
            <Link to={'/'}>
                <h2 className="border-b-2 border-transparent cursor-pointer" style={studentBorder}>List of Students</h2>
            </Link>

            <Link to={'/favourites'}>
                <h2 className="border-b-2 border-transparent cursor-pointer" style={favBorder}>Favourite Students</h2>
            </Link>
        </header>
    )
}

export default Header;