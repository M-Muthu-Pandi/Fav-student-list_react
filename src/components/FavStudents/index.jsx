import Header from "../Header";
import FavStudentList from "./FavStudentList";

const FavStudents = (props) => {
    const favStudents = props.favStudents;
    const removeFavourite = props.removeFavourite;

    return (
        <div className="xl:px-56 lg:px-40 md:px-20">
            <Header favBorder={{borderBottom:"2px solid black"}} />
            <FavStudentList favStudents={favStudents} removeFavourite={removeFavourite} />
        </div>
    )
}

export default FavStudents;