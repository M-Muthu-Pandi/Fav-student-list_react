const FavStudentList = (props) => {
    const favStudents = props.favStudents;
    const removeFavourite = props.removeFavourite;

    return (
        <section>
            <ol>
                {
                    favStudents.map((item, index) => {
                        return (
                            <li key={index} className="flex justify-between items-center mb-3 px-5 sm:px-20"><p>{index + 1}. {item.myName}</p> <button onClick={() => { removeFavourite(item.id) }} className="bg-red-500 text-white mr-5 px-8 py-1 rounded-lg">Remove</button></li>
                        )
                    })
                }
            </ol>
        </section>
    )
}

export default FavStudentList;