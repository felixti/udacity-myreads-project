import React from "react";
import PropTypes from "prop-types";
import "./book.style.css";
import BookControl from "../BookControl/book-control";
import BookDetail from "../BookDetail/book-detail";

const Book = props => {
  const {
    bookId,
    bookTitle,
    bookAuthor,
    thumbnail,
    defaultShelf,
    onChangeBookShelf
  } = props;

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 192,
            backgroundImage: `url(${thumbnail})`
          }}
        />
        <BookControl
          bookId={bookId}
          onChangeBookShelf={onChangeBookShelf}
          defaultShelf={defaultShelf}
        />
      </div>
      <BookDetail title={bookTitle} author={bookAuthor} />
    </div>
  );
};

Book.propTypes = {
  bookId: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  bookAuthor: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  defaultShelf: PropTypes.string,
  onChangeBookShelf: PropTypes.func
};

export default Book;
