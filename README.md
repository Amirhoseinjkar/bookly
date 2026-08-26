
# Bookly 📚

Bookly is a responsive book discovery and reading tracker built with React.

It allows users to discover books, search for titles and authors, browse categories, view detailed book information, and keep track of books they want to read or have already read.

## Features

- 🔎 Search for books by title or author
- 📚 Browse popular and newly released books
- 🏷️ Browse books by category
- 📖 View detailed information about individual books
- 📌 Add books to a "Want to Read" list
- ✅ Mark books as "Have Read"
- 🔐 User registration and login with Firebase Authentication
- 👤 User profile page
- 🚪 User logout
- 💾 Persistent reading lists using LocalStorage
- 📱 Responsive design for desktop and mobile
- ⏳ Loading and empty states

## Built With

- React
- React Router
- Tailwind CSS
- Firebase Authentication
- Open Library API
- React Icons
- Vite
- LocalStorage

## API

Bookly uses the [Open Library API](https://openlibrary.org/developers/api) to retrieve book information, covers, categories, and search results.

## Authentication

Firebase Authentication is used to handle:

- User registration
- User login
- Authentication state
- User logout

The application uses React Context to make the current authentication state available throughout the application.

## Getting Started

### 1. Clone the repository

git clone https://github.com/Amirhoseinjkar/bookly.git
2. Navigate to the project
cd bookly
3. Install dependencies
npm install
4. Start the development server
npm run dev

The application will then be available at the local development URL provided by Vite.

Project Structure
src/
├── assets/
├── components/
├── context/
├── pages/
├── api.js
├── firebase.js
├── App.jsx
└── main.jsx
What I Learned

This project was built as a learning project while developing my React skills.

Through Bookly, I practiced:

Building reusable React components
Managing state with useState
Handling side effects with useEffect
Sharing application state with Context API
Dynamic routing with React Router
Working with URL parameters and search parameters
Firebase Authentication
Persisting data with LocalStorage
Creating responsive interfaces with Tailwind CSS
Handling loading, empty, and error states