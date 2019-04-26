import React from "react";
import PropTypes from "prop-types";
import "./book-control.style.css";
import "../Checkmark/checkmark.style.css";

const BookControl = props => {
  const { bookId, defaultShelf, onChangeBookShelf } = props;

  const handleCheckOption = ({ target: { value } }) => {
    if (onChangeBookShelf) {
      onChangeBookShelf(bookId, value);
    }
  };

  return (
    <div className="book-shelf-changer">
      <select value={defaultShelf} onChange={handleCheckOption}>
        <option value="move" disabled>
          Move to...
        </option>
        <option />
        <option
          className={
            defaultShelf === "currentlyReading"
              ? "checkmark checkmark_stem checkmark_kick"
              : undefined
          }
          value="currentlyReading"
        >
          Currently Reading
        </option>
        <option
          className={
            defaultShelf === "wantToRead"
              ? "checkmark checkmark_stem checkmark_kick"
              : undefined
          }
          value="wantToRead"
        >
          Want to Read
        </option>
        <option
          className={
            defaultShelf === "read"
              ? "checkmark checkmark_stem checkmark_kick"
              : undefined
          }
          value="read"
        >
          Read
        </option>
        <option
          className={
            defaultShelf === "none" || defaultShelf === undefined
              ? "checkmark checkmark_stem checkmark_kick"
              : undefined
          }
          value="none"
        >
          None
        </option>
      </select>
    </div>
  );
};

BookControl.propTypes = {
  bookId: PropTypes.string.isRequired,
  defaultShelf: PropTypes.string,
  onChangeBookShelf: PropTypes.func.isRequired
};

export default BookControl;
