import React from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./book-api/BooksAPI";
import BookList from "./containers/BooksList/book-list";
import SearchBook from "./containers/SearchBook/search-book";

class BooksApp extends React.Component {
  state = {
    books: [],
    searchedBooks: [],
    showSearchPage: false
  };

  moveBookShelf = (bookId, newShelf) => {
    const book = this.state.books.find(_ => _.id === bookId);
    BooksAPI.update(book, newShelf)
      .then(() => this.getAllBooks())
      .catch(error => console.log(error));
  };

  addBookToMyShelves = (bookId, newShelf) => {
    const setBookShelf = state => {
      return state.searchedBooks.map(s => {
        if (s.id === bookId) {
          s.shelf = newShelf;
          return s;
        }

        return s;
      });
    };

    this.setState(currentState => ({
      searchedBooks: setBookShelf(currentState)
    }));

    const book = this.state.searchedBooks.find(_ => _.id === bookId);
    BooksAPI.update(book, newShelf)
      .then(() => this.getAllBooks())
      .catch(error => console.log(error));
  };

  setBookShelfToSearchedBooks = searchedBooks =>
    searchedBooks.map(sb => {
      const bookShelf = this.state.books.find(b => b.id === sb.id);
      sb.shelf = bookShelf ? bookShelf.shelf : "none";
      return sb;
    });

  searchBook = ({ target: { value } }) => {
    value.length > 2
      ? BooksAPI.search(value)
          .then(books => {
            books instanceof Array
              ? this.setState({
                  searchedBooks: this.setBookShelfToSearchedBooks(books)
                })
              : this.setState({ searchedBooks: [] });
          })
          .catch(error => console.log("error", error))
      : this.setState({ searchedBooks: [] });
  };

  booksByShelf = books => shelf => books.filter(b => b.shelf === shelf);

  getAllBooks = () => {
    BooksAPI.getAll()
      .then(books => this.setState({ books }))
      .catch(error => console.log(error));
  };

  componentDidMount() {
    this.getAllBooks();
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BookList
              currentlyReadingBooks={this.booksByShelf(this.state.books)(
                "currentlyReading"
              )}
              wantToReadBooks={this.booksByShelf(this.state.books)(
                "wantToRead"
              )}
              readBooks={this.booksByShelf(this.state.books)("read")}
              onChangeBookShelf={this.moveBookShelf}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBook
              books={this.state.searchedBooks}
              handleBookSearch={this.searchBook}
              onChangeBookShelf={this.addBookToMyShelves}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
