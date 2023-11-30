import React, { useState } from "react";
import AuthorForm from ".Authorform";

const AuthorDashboard = () => {
  const [authors, setAuthors] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const handleAuthorSubmit = (values) => {
    if (selectedAuthor) {
      // Edit existing author
      setAuthors((prevAuthors) =>
        prevAuthors.map((author) =>
          author.id === selectedAuthor.id ? { ...author, ...values } : author
        )
      );
      setSelectedAuthor(null);
    } else {
      // Add new author
      setAuthors((prevAuthors) => [...prevAuthors, { id: new Date().getTime(), ...values }]);
    }
  };

  const handleAuthorEdit = (author) => {
    setSelectedAuthor(author);
  };

  const handleAuthorDelete = (author) => {
    setAuthors((prevAuthors) => prevAuthors.filter((a) => a.id !== author.id));
  };

  return (
    <div>
      <h2>Authors</h2>
      <AuthorForm onSubmit={handleAuthorSubmit} initialValues={selectedAuthor || {}} />
      <ul>
        {authors.map((author) => (
          <li key={author.id}>
            {author.name}{' '}
            <button onClick={() => handleAuthorEdit(author)}>Edit</button>
            <button onClick={() => handleAuthorDelete(author)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorDashboard;
