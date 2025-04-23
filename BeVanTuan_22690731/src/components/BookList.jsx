import React from "react";
import BookItem from "./BookItem";

const BookList = ({ books, onDelete }) => {
  return (
    <div>
      <h2>Danh sách sách</h2>
      <ul>
        {books.map((book) => (
          <BookItem key={book.id} book={book} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
