import FavStudents from "./FavStudents";
import Students from "./Students";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { useState } from "react";

function StudentManager() {
    const studentList = [
        { id: 1, myName: "Muthu" },
        { id: 2, myName: "Vijay" },
        { id: 3, myName: "Deepak" },
        { id: 4, myName: "Surya" },
        { id: 5, myName: "Selvam" }
    ];

    const [favStudents, setFavStudents] = useState([]);

    const addFavourite = (studentId) => {
        const student = studentList.find((item) => item.id === studentId);
        if (student && !favStudents.some(fav => fav.id === studentId)) {
            setFavStudents([...favStudents, student]);
        }
    }

    const removeFavourite = (favStudentId) => {
        const student = favStudents.find((item) => item.id === favStudentId);
        if (student) {
            setFavStudents(favStudents.filter((item) => item.id !== favStudentId));
        }
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Students studentList={studentList} addFavourite={addFavourite} favStudents={favStudents} />} />
                <Route path='/favourites' element={<FavStudents favStudents={favStudents} removeFavourite={removeFavourite} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default StudentManager;
