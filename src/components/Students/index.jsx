import Header from "../Header";
import StudentList from "./StudentList";

const Students = (props) => {
    const studentList = props.studentList;
    const addFavourite = props.addFavourite;
    const favStudents = props.favStudents;
    return (
        <div className="xl:px-56 lg:px-40 md:px-20">
            <Header />
            <StudentList studentList={studentList} addFavourite={addFavourite} favStudents={favStudents} />
        </div>
    )
}

export default Students;