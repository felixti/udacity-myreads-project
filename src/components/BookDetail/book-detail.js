import React from "react";
import PropTypes from "prop-types";
import "./book-detail.style.css";

const BookDetail = props => {
  const { title, author } = props;

  return (
    <div key={title} id="book-detail">
      <div className="book-title">{title}</div>
      <div className="book-authors">{author}</div>
    </div>
  );
};

BookDetail.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default BookDetail;
