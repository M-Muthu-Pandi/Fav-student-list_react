const StudentList = (props) => {
    const studentList = props.studentList;
    const addFavourite = props.addFavourite;
    const favStudents = props.favStudents;

    return (
        <section>
            <ol>
                {
                    studentList.map((item, index) => {
                        const isFavourite = favStudents.some(fav => fav.id === item.id);
                        return (
                            <li key={index} className="flex justify-between items-center mb-3 px-5 sm:px-20"><p>{index + 1}. {item.myName}</p> <button onClick={() => { addFavourite(item.id) }} disabled={isFavourite} className={`bg-black text-white mr-5 px-2 py-1 rounded-lg ${isFavourite ? 'bg-gray-500' : 'bg-black text-white'}`}>Add to Favourite</button></li>
                        )
                    })
                }
            </ol>
        </section>
    )
}

export default StudentList;