import React, { useState } from "react";
import {Bookform} from"./Bookform";



export const BookDashboard = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookSubmit = (values) => {
    if (selectedBook) {
      // Edit existing book
      setBooks((prevBooks) =>
        prevBooks.map((book) =>
          book.id === selectedBook.id ? { ...book, ...values } : book
        )
      );
      setSelectedBook(null);
    } else {
     
      // Add new book
      setBooks((prevBooks) => [...prevBooks, { id: new Date().getTime(), ...values }]);
    }
  };

  const handleBookEdit = (book) => {
    setSelectedBook(book);
  };

  const handleBookDelete = (book) => {
    setBooks((prevBooks) => prevBooks.filter((b) => b.id !== book.id));
  };

  return (
    <div>
      <h2>Books</h2>
      <Bookform onSubmit={handleBookSubmit} initialValues={selectedBook || {}} />
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}{' '}
            <button onClick={() => handleBookEdit(book)}>Edit</button>
            <button onClick={() => handleBookDelete(book)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

