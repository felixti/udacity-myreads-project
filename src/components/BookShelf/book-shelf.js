import React from "react";
import PropTypes from "prop-types";
import "./book-shelf.style.css";
import Book from "../Book/book";

const BookShelf = props => {
  const { bookShelfTitle, books, onChangeBookShelf } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{bookShelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((b, index) => (
            <li key={`${b.shelf}-${index}`}>
              <Book
                key={`${b.title}-${index}`}
                bookId={b.id}
                bookTitle={b.title}
                bookAuthor={b.authors[0]}
                thumbnail={b.imageLinks.smallThumbnail}
                defaultShelf={b.shelf}
                onChangeBookShelf={onChangeBookShelf}
                showControl={true}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  bookShelfTitle: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onChangeBookShelf: PropTypes.func.isRequired
};

export default BookShelf;
