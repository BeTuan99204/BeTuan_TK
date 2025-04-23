import React from "react";

const BookItem = ({ book, onDelete }) => {
  return (
    <li style={{ marginBottom: "10px" }}>
      <strong>{book.title}</strong> - {book.author} ({book.genre}, {book.year})
      <button
        onClick={() => onDelete(book.id)}
        style={{
          marginLeft: "10px",
          backgroundColor: "red",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Xoá
      </button>
    </li>
  );
};

export default BookItem;
