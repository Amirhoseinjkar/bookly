
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

```bash
git clone https://github.com/Amirhoseinjkar/bookly.git