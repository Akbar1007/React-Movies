# React Movies Dashboard

This project is a simple React application that serves as a movies dashboard. It includes functionality for displaying the total number of movies, the number of watched movies, and allows users to search and filter movies.

## Features

- **Dynamic Display:** Shows the total number of all movies and the number of watched movies.
- **Search Functionality:** Users can search for specific movies.
- **Filter Options:** Includes filters for "All Movies," "Popular Movies," and "Most Watched Movies."
- **Responsive Design:** Styled with CSS for a clean and responsive user interface.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/react-movies-dashboard.git
   cd react-movies-dashboard
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

The project is organized as follows:

```
├── node_modules/          # Contains all the npm packages and dependencies
├── public/                # Static files for the project (e.g., favicon, index.html)
├── src/                   # Source files for the React application
│   ├── components/        # Contains all the reusable components
│   │   ├── App/           # Main application component
│   │   │   ├── App.css    # Styling for the App component
│   │   │   └── App.js     # Main App component logic
│   │   ├── Filter/        # Filter component
│   │   │   ├── Filter.css # Styling for the Filter component
│   │   │   └── Filter.js  # Filter component logic
│   │   ├── Info/          # Info component
│   │   │   ├── Info.css   # Styling for the Info component
│   │   │   └── Info.js    # Info component logic
│   │   ├── Search-Panel/  # Search Panel component
│   │       ├── SearchPanel.css  # Styling for the Search Panel component
│   │       └── SearchPanel.js   # Search Panel component logic
│   ├── index.css          # Global styles for the application
│   └── index.js           # Entry point of the React application
├── .gitignore             # Specifies files and directories ignored by Git
├── package-lock.json      # Auto-generated file for dependency version locking
├── package.json           # Project metadata and dependencies
└── README.md              # Project documentation
```

### Key Files and Folders

- **`components/`**: Contains reusable React components like `Header`, `SearchBar`, `MovieList`, and `Filters`.
- **`styles/`**: Contains CSS files for styling the components.
- **`App.js`**: Main application component where all other components are assembled.
- **`index.js`**: Entry point of the application.

## Usage

1. **View Movies**: By default, the app displays all movies. The total number of movies is shown at the top.
2. **Filter Movies**: Use the filter buttons to view popular movies or most-watched movies.
3. **Search**: Type in the search bar to find specific movies by name.

## Technologies Used

- **React.js**: For building the user interface.
- **CSS**: For styling the components and layout.
- **JavaScript**: For logic and interactivity.

## Customization

1. **Add New Filters:**
   - Open the `Filters.js` component and add new filter buttons with appropriate logic.
2. **Modify Styles:**
   - Edit the CSS files in the `styles/` directory to customize the look and feel.
3. **Extend Functionality:**
   - Add more components or integrate an external API for dynamic movie data.

## Acknowledgments

- Inspired by the need for a simple and intuitive movie dashboard.
- Built with React and styled with CSS.

---

Feel free to customize and enhance this application as needed. Contributions are welcome!
