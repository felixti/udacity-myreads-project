import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./search-book.style.css";
import Book from "../../components/Book/book";

const SearchBook = props => {
  const { handleBookSearch, books, onChangeBookShelf } = props;

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            onChange={handleBookSearch}
            placeholder="Search by title or author (starts after 3 typed chars)"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books.map((b, index) => (
            <li key={`${b.shelf}-${index}`}>
              <Book
                key={`${b.title}-${index}`}
                bookId={b.id}
                bookTitle={b.title}
                bookAuthor={b.authors ? b.authors[0] : ""}
                thumbnail={b.imageLinks ? b.imageLinks.smallThumbnail : ""}
                defaultShelf={b.shelf}
                onChangeBookShelf={onChangeBookShelf}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

SearchBook.propTypes = {
  handleBookSearch: PropTypes.func.isRequired,
  onChangeBookShelf: PropTypes.func.isRequired,
  books: PropTypes.array
};

export default SearchBook;
