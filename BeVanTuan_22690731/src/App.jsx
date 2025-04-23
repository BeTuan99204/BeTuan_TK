import React, { useState, useMemo } from "react";
import BookList from "./components/BookList";
import GenreFilter from "./components/GenreFilter";
import "./index.css";

function App() {
  const [books, setBooks] = useState(
    JSON.parse(localStorage.getItem("books")) || [
      {
        id: 1,
        title: "Đắc Nhân Tâm",
        author: "Dale Carnegie",
        genre: "Kỹ năng sống",
        year: 1936,
      },
      {
        id: 2,
        title: "Harry Potter và Hòn đá Phù thủy",
        author: "J.K. Rowling",
        genre: "Fantasy",
        year: 1997,
      },
      {
        id: 3,
        title: "Nhà Giả Kim",
        author: "Paulo Coelho",
        genre: "Tiểu thuyết",
        year: 1988,
      },
    ]
  );
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
  });
  const [selectedGenre, setSelectedGenre] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddBook = () => {
    if (!formData.title || !formData.author || !formData.genre || !formData.year)
      return;
    const newBook = {
      ...formData,
      id: Date.now(),
      year: parseInt(formData.year),
    };
    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedBooks));
    setFormData({ title: "", author: "", genre: "", year: "" });
  };

  const handleDelete = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    setBooks(updatedBooks);
    localStorage.setItem("books", JSON.stringify(updatedBooks));
  };

  const genres = useMemo(() => [...new Set(books.map((book) => book.genre))], [
    books,
  ]);

  const filteredBooks = books
    .filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((book) =>
      selectedGenre ? book.genre === selectedGenre : true
    );

  return (
    <div className="app-container">
      <h1>Quản lý Sách</h1>

      <div className="form-group">
        <input
          name="title"
          placeholder="Tên sách"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          name="author"
          placeholder="Tác giả"
          value={formData.author}
          onChange={handleChange}
        />
        <input
          name="genre"
          placeholder="Thể loại"
          value={formData.genre}
          onChange={handleChange}
        />
        <input
          name="year"
          placeholder="Năm"
          value={formData.year}
          onChange={handleChange}
        />
        <button onClick={handleAddBook} className="add-btn">
          Thêm sách
        </button>
      </div>

      <input
        type="text"
        placeholder="Tìm kiếm sách..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <GenreFilter
        genres={genres}
        selectedGenre={selectedGenre}
        onSelectGenre={setSelectedGenre}
      />

      <BookList books={filteredBooks} onDelete={handleDelete} />

      <h3>Tổng số sách: {filteredBooks.length}</h3>
    </div>
  );
}

export default App;
