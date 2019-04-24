import React from "react";
import PropTypes from "prop-types";
import "./book-list.style.css";
import BookShelf from "../../components/BookShelf/book-shelf";
import { Link } from "react-router-dom";

const BookList = props => {
  const {
    currentlyReadingBooks,
    wantToReadBooks,
    readBooks,
    onChangeBookShelf
  } = props;
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf
            bookShelfTitle={"Currently Reading"}
            books={currentlyReadingBooks}
            onChangeBookShelf={onChangeBookShelf}
          />
          <BookShelf
            bookShelfTitle={"Want to Read"}
            books={wantToReadBooks}
            onChangeBookShelf={onChangeBookShelf}
          />
          <BookShelf
            bookShelfTitle={"Read"}
            books={readBooks}
            onChangeBookShelf={onChangeBookShelf}
          />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Search</Link>
      </div>
    </div>
  );
};

BookList.propTypes = {
  currentlyReadingBooks: PropTypes.array.isRequired,
  wantToReadBooks: PropTypes.array.isRequired,
  readBooks: PropTypes.array.isRequired,
  onChangeBookShelf: PropTypes.func.isRequired
};

export default BookList;
