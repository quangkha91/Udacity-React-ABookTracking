# A Book Tracking App Project
The 'A Book Tracking App' project will allow users to manage their personal library and keep track of books they are currently reading, want to read, and have already read. The interface will be user-friendly and easy to use, providing basic functionalities for book management.

# Main Features:
- Display Books: Display a list of books in the library, including titles, authors, and cover images.
- Categorize Books: Books are categorized into three categories: "Currently Reading," "Want to Read," and "Read."
- Move Books: Allow users to move books between categories by selecting a category from a dropdown or using a drag-and-drop interface.
- Search for Books: Provide a book search functionality for users to add new books to their library.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## TL;DR
To get started developing right away:

- install all project dependencies with `npm install`
- start the development server with `npm start`

# Directory Structure 
```bash
├── README.md - This file.
├── .gitignore
├── package-lock.json
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
└── public
    ├── favicon.ico # React Icon, You may change if you wish.
    ├── index.html # DO NOT MODIFY
    ├── logo192.png
    ├── logo512.png
    ├── manifest.json
    ├── robots.txt
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    └── components
        ├── Book.js # Component for book item
        ├── BookShelfChanger.js # Component for book shelf changer
        ├── BookShelve.js # Component for book shelve
        ├── ListBooks.js # Component for list book
    └── icons # Helpful images for your app. Use at your discretion.
        ├── add.svg
        ├── arrow-back.svg
        ├── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    ├── index.js # You should not need to modify this file. It is used for DOM rendering only.
    ├── logo.svg
    └── pages
        ├── Home.js # Component for home page
        ├── Search.js # Component for search page
    ├── reportWebVitals.js
    ├── setupTests.js
    └── utils
        ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
        └── Constants.js # Contain constants.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.
## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.
