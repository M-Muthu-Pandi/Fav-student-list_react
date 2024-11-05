# Student Manager

A responsive React application for managing a list of students, allowing users to add students to a "Favourites" list and remove them back to the main list. This project uses React Router for navigation and is optimized for all device sizes.

## Features

- **Add to Favourites**: Move students from the main list to the favourites list.
- **Remove from Favourites**: Move students from the favourites list back to the main list.
- **Conditional Buttons**: The "Add to Favourite" button is disabled once a student is added to the favourites list.
- **React Router Navigation**: Navigate between the main list and favourites list using routes.
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices.

## Live Demo

Check out the live version of the app [here](https://student-manager-react-mu2.vercel.app/).

## Project Structure

- **`StudentManager.jsx`** - The main component that holds the application state, managing both the student list and the favourites list.
- **`StudentList.jsx`** - Displays a list of all students with an "Add to Favourite" button for each student.
- **`FavStudentList.jsx`** - Displays a list of favourite students with a "Remove" button for each student.

## Setup and Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/M-Muthu-Pandi/Fav-student-list_react.git
   cd Fav-student-list_react
   ```

2. **Install Dependencies**

   Ensure you have `node` and `npm` installed, then run:

   ```bash
   npm install
   ```

3. **Run the Application**

   Start the development server:

   ```bash
   npm start
   ```

4. **Access the Application**

   Open your browser and go to [http://localhost:3000](http://localhost:3000) to see the app in action.

## Usage

- **Navigate to Main List**: The default route (`/`) shows the main student list. Here, you can add students to your favourites by clicking the "Add to Favourite" button.
- **Navigate to Favourites List**: Go to the `/favourites` route to view the list of favourite students. You can remove students from favourites by clicking the "Remove" button.
- **Button States**: Once a student is added to favourites, the "Add to Favourite" button is disabled to prevent duplicate additions.

## Code Overview

### `StudentManager.jsx`

The parent component that holds the `studentList` and `favStudents` state. It includes functions for:
- **`addFavourite(studentId)`**: Adds a student to the favourites list if they’re not already there.
- **`removeFavourite(favStudentId)`**: Removes a student from the favourites list.

### `StudentList.jsx`

Displays each student in `studentList`. For each student:
- The "Add to Favourite" button is disabled if they’re already in the favourites list.
- Uses props `addFavourite` and `favStudents` to handle adding students to favourites and checking if they’re already added.

### `FavStudentList.jsx`

Displays each student in `favStudents`. For each student:
- Shows a "Remove" button to allow removal from favourites.
- Uses the prop `removeFavourite` to handle the removal of students from the favourites list.

## Dependencies

- **React** - JavaScript library for building the user interface.
- **React Router** - Handles navigation between the main and favourites list.

## Responsive Design

This application is designed to be fully responsive, ensuring an optimized and user-friendly interface across desktop, tablet, and mobile devices.

## Future Enhancements

- Add the ability to sort students by name.
- Implement search functionality to quickly find students in the list.
- Persist favourites in local storage to save across sessions.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.