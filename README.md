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
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── App/
│   │   │   ├── App.css
│   │   │   └── App.js
│   │   ├── Filter/
│   │   │   ├── Filter.css
│   │   │   └── Filter.js
│   │   ├── Info/
│   │   │   ├── Info.css
│   │   │   └── Info.js
│   │   ├── Search-Panel/
│   │       ├── SearchPanel.css
│   │       └── SearchPanel.js
│   ├── index.css
│   └── index.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

### Key Files and Folders

- **`components/`**: Contains reusable React components like `Filter`, `Search-Panel`, `MovieList`, `Info`, and etc with its styles.
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

## Acknowledgments

- Inspired by the need for a simple and intuitive movie dashboard.
- Built with React and styled with CSS.

---

I am still working on further improvements 💻
Feel free to customize and enhance this application as needed. Contributions are welcome!
